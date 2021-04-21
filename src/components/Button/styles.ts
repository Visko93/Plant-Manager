import {StyleSheet} from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.green,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    }, 

    btntxt: {
        color: colors.white
    }
  });