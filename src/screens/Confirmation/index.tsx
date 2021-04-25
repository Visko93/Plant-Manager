import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

//Components
import Button from "../../components/atoms/Button";

//UI
import { styles } from "./styles";

export function Confirmation(props: any) {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate("PlantSelect");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <View style={styles.form}>
            <Text style={styles.emoji}>{"😁"}</Text>
            <Text style={styles.title}>Prontinho</Text>
            <Text style={styles.subtitle}>
              Agora vamos começar a cuidar das suas plantinhas com muito
              cuidado.
            </Text>
            <View style={styles.callToAction}>
              <Button onPress={handleMoveOn} title="Confirmar" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
