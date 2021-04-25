import {StyleSheet, Dimensions} from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    button: {
       backgroundColor: colors.shape,
       height: 40,
       width: 76,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 12,
       marginHorizontal: 5,
    }, 
    containerActive: {
        backgroundColor: colors.green_light,
    },
    btntxt: {
        color: colors.body,
        fontFamily: fonts.body
    },
    btntxtActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading
    }
  });