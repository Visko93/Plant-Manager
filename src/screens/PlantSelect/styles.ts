import {StyleSheet, Dimensions} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      width: '100%',
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 20,
    },
    headingName: {
      fontFamily: fonts.heading,
    },
    subTitle: {
      width: '100%',
      textAlign: "left",
      fontSize: 17,
      lineHeight: 23,
      fontFamily: fonts.body,
      color: colors.body,
      paddingTop: 20,
    },
    filterBox: {
      height: 40,
      justifyContent: 'center',
      paddingBottom: 5,
      marginLeft: 20,
      marginVertical: 32,
    },
    plantList: {
      flex: 1,
      paddingHorizontal:32,
      justifyContent: 'center'
    },
    plantListContainer: {
      justifyContent: 'center',
      
    }
  });