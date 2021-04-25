import * as React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";
import avatar from "../../../assets/avatar.png";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Olá, <Text style={styles.headingName}>{"\n"}Tiago</Text>
      </Text>
      <Image source={avatar} style={styles.image} />
    </View>
  );
}
