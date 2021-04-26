import * as React from "react";
import { Text, Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import avatar from "../../../assets/avatar.png";

export function Header() {
  const [userName, setUserName] = React.useState<string>();

  React.useEffect(() => {
    async function loadUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }
    loadUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Olá,{" "}
        <Text style={styles.headingName}>
          {"\n"}
          {userName}
        </Text>
      </Text>
      <Image source={avatar} style={styles.image} />
    </View>
  );
}
