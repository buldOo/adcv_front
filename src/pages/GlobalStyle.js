import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Poppins-ExtraLight',
        color: '#000000',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        color: '#000000'
    },
    textGreen: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        color: '#277C52'
    },
    input: {
        height: 55,
        width: 320,
        borderBottomWidth: 1,
        backgroundColor: '#F3F8F1',
        borderColor: '#000000',
    },
    button: {
        borderRadius: 50,
        backgroundColor: '#277C52',
        display: 'flex',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
});

export default GlobalStyles;