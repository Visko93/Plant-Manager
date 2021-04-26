import * as React from "react";
import { Text, View } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export function PlantCardSecondary({ data, ...rest }: PlantCardProps) {
  return (
    <RectButton style={[styles.container]} {...rest}>
      {/* <Image style={styles.image} source={photo} /> */}
      <SvgFromUri
        uri={data.photo}
        width={50}
        height={50}
        style={styles.image}
      />
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar ás</Text>
        <Text style={styles.time}>{data.hour}</Text>
      </View>
    </RectButton>
  );
}
