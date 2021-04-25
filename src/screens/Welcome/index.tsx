import * as React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

//Components
import Button from "../../components/atoms/Button";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import wateringImg from "../../assets/watering.png";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("CheckName");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de{"\n"} forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <Button iconButton onPress={handleStart}>
          <Feather name="chevron-right" style={{ fontSize: 32 }} />
        </Button>
      </View>
    </SafeAreaView>
  );
}
