import * as React from "react";
import { Text, View } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Animated from "react-native-reanimated";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../styles";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantCardProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.removebtn} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
}
