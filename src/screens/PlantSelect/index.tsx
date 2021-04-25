import * as React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import api from "../../services/api";

//Components
import { Header } from "../../components/molecules/Header";
import RectButton from "../../components/atoms/RectButton";
import PlantCardPrimary from "../../components/atoms/PlantCardPrimary";
import { Loading } from "../../components/atoms/Loading";

import { styles } from "./styles";
import { colors } from "../../styles";

interface AmbientesProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const isMountedRef = React.useRef(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [ambientesSelected, setAmbientesSelected] = React.useState("all");
  //Lists
  const [ambientes, setAmbientes] = React.useState<AmbientesProps[]>([]);
  const [plants, setPlants] = React.useState<PlantProps[]>([]);
  const [plantsFilteredList, setPlantsFilteredList] = React.useState<
    PlantProps[]
  >([]);

  const [page, setPage] = React.useState(1);
  const [loadingMore, setLoadingMore] = React.useState(true);
  const [loadedAll, setLoadedAll] = React.useState(false);

  React.useEffect(() => {
    isMountedRef.current = true;

    async function fetchEnviroment() {
      try {
        if (isMountedRef.current) {
          const res = await api.get(
            "plants_environments?_sort=title&_order=asc"
          );
          if (res.status === 200) {
            const data = res.data;
            setAmbientes([
              {
                key: "all",
                title: "Todos",
              },
              ...data,
            ]);
          } else {
            throw res;
          }
        }
      } catch (err) {
        if (isMountedRef.current) {
          setError(err);
        }
      } finally {
        if (isMountedRef.current) {
          isMountedRef.current = false;
        }
        setLoading(false);
      }
    }
    fetchEnviroment();
  }, []);

  React.useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants() {
    try {
      const { data } = await api.get(
        `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
      );

      if (!data) return setLoading(true);
      if (page > 1) {
        setPlants((prevState) => [...prevState, ...data]);
        setPlantsFilteredList((prevState) => [...prevState, ...data]);
      } else {
        setPlants(data);
        setPlantsFilteredList(data);
      }
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoadingMore(false);
      setLoading(false);
    }
  }

  function handleFectchMoreData(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((prevState) => prevState + 1);
    fetchPlants();
  }

  function handleAmbienteSelecionado(ambienteSelecionado: string) {
    setAmbientesSelected(ambienteSelecionado);
    //Verifica
    if (ambientesSelected === "all") return setPlantsFilteredList(plants);

    const filtroPorAmbiente = plants.filter((plant) =>
      plant.environments.includes(ambientesSelected)
    );

    setPlantsFilteredList(filtroPorAmbiente);
  }

  if (loading) return <Loading />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header />
        <Text style={styles.subTitle}>
          <Text style={styles.headingName}>Em qual hambiente</Text>
          {"\n"}você quer colocar sua planta?
        </Text>
      </View>
      <View>
        <FlatList
          data={ambientes}
          renderItem={({ item }) => (
            <RectButton
              title={item.title}
              active={item.key === ambientesSelected}
              onPress={() => handleAmbienteSelecionado(item.key)}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterBox}
        />
      </View>
      <View style={styles.plantList}>
        <FlatList
          data={plantsFilteredList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.plantListContainer}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFectchMoreData(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
