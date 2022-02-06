import { StyleSheet } from "react-native";
import { normalize } from "./CalculatorScreen";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 0,
        flexDirection: 'column',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    textInGeneral: {
        color: "#585858",
        lineHeight: 40,
        fontSize: normalize(30)
    },
    smallText: {
        color: "black",
        alignSelf: "center",
        lineHeight: 40,
    },
    displayCol: {
        flexDirection: 'column',
        width: '100%',
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    scrollBar: {
        flexDirection: 'row',
    },
    displayRow: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
    section: {
        width: '100%',
        height: '50%',
        padding: 20,
        flex: 1
    },
    mainContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: '5%',
    },
    TextInputStyle: {
        borderWidth: 2,
        flex: 1,
        borderRadius: 5,
        borderColor: '#D3D3D3',
        fontSize: 30
    },
    labelTextContainer: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left'
    },
    inputTypeContainter: {
        flex: 2,
        alignContent: 'flex-start',

    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});