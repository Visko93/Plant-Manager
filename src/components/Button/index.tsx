import * as React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  iconButton?: boolean;
  children?: any;
}

export function Button({
  title,
  iconButton = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, iconButton ? { width: 56 } : {}]}
      activeOpacity={0.6}
      {...rest}
    >
      <Text style={styles.btntxt}>
        {title}
        {children ? children : null}
      </Text>
    </TouchableOpacity>
  );
}
