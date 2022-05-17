import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'

const DisplayText = (props) => {

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20}}>
                 <Text style={styles.textInGeneral}>
                   {props.text}
                 </Text>
                 <Text style={styles.textInGeneral}>
                   { props.displayAmount.toFixed(2)}
                 </Text>
          </View>
    )
}

export default DisplayText;