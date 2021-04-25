import {StyleSheet, Dimensions} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: getStatusBarHeight(),
      paddingVertical: 20
    },
    heading: {
      fontSize: 32,
      lineHeight: 34,
      fontFamily: fonts.complement,
      color: colors.heading
    },
    headingName: {
      fontFamily: fonts.heading,
    },
    image: {
      width: 72,
      height: 72,
      borderRadius: 72,
    }
  });