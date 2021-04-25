import * as React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
  iconButton?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  title,
  active = false,
  iconButton = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <RectButton
      style={[
        styles.button,
        iconButton && { width: 56 },
        active && styles.containerActive,
      ]}
      {...rest}
    >
      <Text style={[styles.btntxt, active && styles.btntxtActive]}>
        {title}
        {children ? children : null}
      </Text>
    </RectButton>
  );
}
