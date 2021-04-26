import {StyleSheet, Dimensions} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,        
      backgroundColor: colors.background,
      justifyContent: "space-between",
      paddingTop: 40,
      alignItems: "center",
    },
    title:{
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 32,
        textAlign: 'center',
        marginTop: 20 ,
    },
    subtitle:{
        fontSize: 17,
        color: colors.body,
        fontFamily: fonts.body,
        lineHeight: 25,
        fontWeight: '400',
        textAlign: 'center',

        paddingHorizontal: 20,
        marginTop: 20
    },
    upContainer: {
      height: "60%",
      backgroundColor: colors.shape

    },
    plantContainer: {
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: colors.white,
      paddingBottom: getBottomSpace() || 20
    },
    tip: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '85%',
      backgroundColor: colors.blue_light,
      padding: 16,
      borderRadius: 20,
      position: 'relative',
      bottom: 44,
    },
    tipText: {
      color: colors.blue,
      fontFamily: fonts.complement,
      fontSize: 15,
      lineHeight: 23,
      width: '65%',

    },
    tipImage: {
      width: 56,
      height: 56
    },
    alertText: {
      color: colors.heading,
      fontFamily: fonts.complement,
      fontSize: 13,
      lineHeight: 23,
      textAlign: 'center'
    },
    btnBack: {},
    btnSave: {
      width: '90%'
    },
    dateTimePicker: {
      color: colors.heading,
      fontSize: 24,
      fontFamily: fonts.body
    },
    dateTimePickerBtn: {
      width: '100%',
      alignItems: 'center',
      paddingVertical: 15,
      borderColor: colors.gray,
      backgroundColor: colors.shape,
      borderRadius: 15,
      borderWidth: 2,
      elevation: 3,
      shadowOpacity : 50,

    },
    image: {
      marginTop: 40
    },
  });