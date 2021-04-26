import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

//Components
import Button from "../../components/atoms/Button";

//UI
import { styles } from "./styles";

interface ConfirmationProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😁",
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();
  const {
    title,
    buttonTitle,
    subtitle,
    icon,
    nextScreen,
  } = routes.params as ConfirmationProps;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <View style={styles.form}>
            <Text style={styles.emoji}>{emojis[icon]}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={styles.callToAction}>
              <Button onPress={handleMoveOn} title={buttonTitle} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
