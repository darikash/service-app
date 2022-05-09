import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
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
        color: "white",
        paddingLeft: '10%',
        textAlign: 'center',
        //alignSelf: "center",
        //lineHeight: 40,
        //fontSize: RFPercentage(2)
        fontSize:16,

    },
    tipStyle: {
        color: "white",
        paddingLeft: '10%',
        //alignSelf: "center",
        textAlign: 'left',
        paddingRight: '5%',
        //lineHeight: 40,
        //justifyContent: 'center',
        //alignItems:'center',
    },
    displayCol: {
        // flexDirection: 'column',
        // width: '100%',
        // flex: 1,
        // paddingLeft: '5%',
        // paddingRight: '5%'
        // displayCol: {
        flexDirection: 'row',
        flex: 1,
        alignItems:'center',
        padding: '5%'
        
    },

    textAmount: {
        color: "white",
        //paddingLeft: '0%',
        //alignSelf: "center",
        textAlign: 'left',
        fontSize: 16,
        //lineHeight: 40,
        
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
        fontSize: 30,
        color: "white"
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
    },
  TextInputStyleRating: {
    color: "white",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    fontSize: 30,
    borderWidth: 2,
    flex: 1,
    height: 40,
  }

});