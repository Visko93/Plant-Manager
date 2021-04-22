import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

//Components
import { Button } from "../../components/Button";

//UI
import { styles } from "./styles";

export function Confirmation(props: any) {
  console.log(props);

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
              <Button title="Confirmar" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
