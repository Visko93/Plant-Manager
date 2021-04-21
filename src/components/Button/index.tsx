import * as React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
      <Text style={styles.btntxt}>{title}</Text>
    </TouchableOpacity>
  );
}
