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
      fontSize: 44
    },
    input: {
      borderBottomWidth: 1,
      borderColor: colors.gray,
      color: colors.heading,
      width: '100%',
      marginTop: 50,
      padding: 5,
      textAlign: 'center'
    },
    title: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      marginTop: 20
    },
    callToAction: {
      width: '100%',
      marginBottom: 40,
      padding: 20
    }

  });