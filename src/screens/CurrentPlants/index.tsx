import * as React from "react";
import { Text, Image, View, Alert } from "react-native";

//Components
import { Header } from "../../components/molecules/Header";

import { styles } from "./styles";
import waterdrop from "../../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import {
  loadPlants,
  PlantProps,
  removePlant,
  StoragePlantProps,
} from "../../util/storage";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PlantCardSecondary } from "../../components/atoms/PlantCardSecondary";
import { Loading } from "../../components/atoms/Loading";

export function CurrentPlants() {
  const [myPlants, setMyPlants] = React.useState<PlantProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [nextWatering, setNextWatering] = React.useState<string>();

  React.useEffect(() => {
    async function loadStoragedData() {
      const plantStoraged = await loadPlants();

      const nextTime = formatDistance(
        new Date(plantStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantStoraged[0].name} às ${nextTime} horas`
      );

      setMyPlants(plantStoraged);
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja Remover a ${plant.name}`, [
      { text: "Não 🥳", style: "cancel" },
      {
        text: "Sim 😨",
        onPress: async () => {
          try {
            await removePlant(String(plant.id));
            setMyPlants((prevState) =>
              prevState.filter((item) => item.id !== plant.id)
            );
          } catch (err) {
            Alert.alert(
              "Não conseguimos remover ela, talvez a raiz esteja muito Forte."
            );
          }
        },
      },
    ]);
  }

  if (loading) return <Loading />;
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatering}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Proximas Regadas</Text>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
}
