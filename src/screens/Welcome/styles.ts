import {StyleSheet, Dimensions} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,        
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 20,
    },
    title:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 38,
        textAlign: 'center',
        marginTop: 38,
    },
    subtitle:{
        fontSize: 17,
        color: colors.body,
        fontFamily: fonts.body,
        lineHeight: 25,
        fontWeight: '400',
        textAlign: 'center',

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
        height: Dimensions.get('window').width * 0.7,
    },
    btntxt: {
        color: colors.white
    }
  });