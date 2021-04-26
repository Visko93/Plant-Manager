import * as React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  iconButton?: boolean;
  children?: any;
}

export default function Button({
  title,
  iconButton = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        iconButton ? { width: 56 } : {},
        rest.disabled ? styles.btnDisable : null,
      ]}
      activeOpacity={0.6}
      {...rest}
    >
      <Text
        style={[styles.btntxt, rest.disabled ? styles.btntxtDisable : null]}
      >
        {title}
        {children ? children : null}
      </Text>
    </TouchableOpacity>
  );
}
