import {StyleSheet, Dimensions} from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical:25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5
    }, 
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        marginVertical: 17,
        color: colors.heading
    },
    image: {},
    details:{
        alignItems: 'flex-end',
        marginRight: 10
    },
    time:{
        marginTop: 5,
        fontSize: 13,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    timeLabel:{
        marginTop: 5,
        fontSize: 13,
        fontFamily: fonts.body,
        color: colors.body_light
    },
    removebtn: {
        width: 140,
        height: 103,
        backgroundColor: colors.red,
        marginTop: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -35,
        paddingLeft: 15
    }

  });