import {StyleSheet, Dimensions} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      width: '100%',
      backgroundColor: colors.background,
    },
    wrapper: {
      flex: 1,
      width: '100%',      
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 54,
      alignItems: 'center'
    },
    header: {
      textAlign: 'center'
    },
    emoji: {
      fontSize: 90,
      marginBottom: 64
    },
    title: {
      fontSize: 24,
      lineHeight: 30,
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      marginTop: 20
    },
    subtitle:{
      fontSize: 17,
      color: colors.body,
      fontFamily: fonts.body,
      lineHeight: 25,
      fontWeight: '400',
      textAlign: 'center',

  },
    callToAction: {
      width: '100%',
      marginTop: 40,
      padding: 20
    }


  });