import * as React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

import { styles } from "./styles";
import loadingAnimation from "../../../assets/load.json";

export function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}
