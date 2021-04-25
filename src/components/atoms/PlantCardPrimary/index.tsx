import * as React from "react";
import { Text } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export default function PlantCardPrimary({ data, ...rest }: PlantCardProps) {
  return (
    <RectButton style={[styles.container]} {...rest}>
      {/* <Image style={styles.image} source={photo} /> */}
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={70}
        style={styles.image}
      />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}
