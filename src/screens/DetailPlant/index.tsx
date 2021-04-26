import * as React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  Alert,
  ScrollView,
  Platform,
  TouchableOpacity,
  Route,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
import { loadPlants, PlantProps, savePlant } from "../../util/storage";

//Components
import Button from "../../components/atoms/Button";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import waterDrop from "../../assets/waterdrop.png";

interface Params {
  plant: PlantProps;
}

export function DetailPlant({ route }: Route) {
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [showDatePicker, setshowDatePicker] = React.useState(
    Platform.OS === "ios"
  );

  const { plant } = route.params as Params;
  const navigation = useNavigation();
  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") setshowDatePicker((prevState) => !prevState);

    //check date is not in the past
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedTime(new Date());
      return Alert.alert("Escolha um momento no futuro ⏳🔮⌛");
    }

    if (dateTime) setSelectedTime(dateTime);
  }

  function handleOpenTimePicker() {
    setshowDatePicker((prevState) => !prevState);
  }

  async function handleSave() {
    const data = await loadPlants();

    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedTime,
      });
      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        buttonTitle: "Muito obrigado :D",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.",
        icon: "hug",
        nextScreen: "CurrentPlants",
      });
    } catch (err) {
      Alert.alert(
        "Não conseguimos salvar essa planta, pode tentar novamente? 😪"
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.upContainer}>
        <View style={styles.plantContainer}>
          <SvgFromUri
            uri={plant.photo}
            style={styles.image}
            width={150}
            height={150}
          />
          <Text style={styles.title}>{plant.name}</Text>
          <Text style={styles.subtitle}>{plant.about}</Text>
        </View>
      </View>
      <View style={styles.tip}>
        <Image source={waterDrop} style={styles.tipImage} />
        <Text style={styles.tipText}>{plant.water_tips}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.alertText}>
          Escolha o melhor horário para ser lembrado:
        </Text>
        <View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === "android" && (
            <TouchableOpacity
              style={styles.dateTimePickerBtn}
              onPress={handleOpenTimePicker}
            >
              <Text style={styles.dateTimePicker}>{`Mudar ${format(
                selectedTime,
                "HH:mm"
              )}`}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.btnSave}>
        <Button title="Cadastrar Planta" onPress={handleSave} />
      </View>
    </ScrollView>
  );
}
