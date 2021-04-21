import {StyleSheet} from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "space-between",
    },
    title:{
        fontSize: 32,
        color: colors.heading,
        lineHeight: 38,
        textAlign: 'center',
        marginTop: 38,
    },
    subtitle:{
        fontSize: 17,
        color: colors.body,
        lineHeight: 25,
        fontWeight: '400',

        paddingHorizontal: 20,
    },
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
    image: {
        width: 292,
        height: 284,
    },
    btntxt: {
        color: colors.white
    }
  });