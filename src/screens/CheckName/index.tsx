import * as React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

//Components
import { Button } from "../../components/Button";

import { colors } from "../../styles";
import { styles } from "./styles";

export function CheckName() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFilled, setisFilled] = React.useState(false);
  const [name, setName] = React.useState<string>();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate("Confirmation", { params: name });
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setisFilled(!!name);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputChange = (value: string) => {
    setisFilled(!!value);
    setName(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.emoji}>{isFilled ? "😄" : "😃"}</Text>
              <Text style={styles.title}>
                Como podemos{"\n"}
                chamar você?
              </Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.callToAction}>
                <Button
                  title="Confirmar"
                  onPress={handleConfirm}
                  disabled={!isFilled}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
