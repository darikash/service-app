import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'

const DisplayText = (props) => {
  console.log(props.displayTipAmount)
    return (
        <View style={styles.displayCol}>
                 <Text style={styles.textInGeneral}>
                   Tip Total:{" "}
                 </Text>
                 <TextInput
                   style={styles.TextInputHiddenBorderStyle}
                   defaultValue={Number(props.displayTipAmount).toFixed(2)}
                   textAlign="right"
                   editable={false}
                 ></TextInput>
               </View>
    )
}

export default DisplayText;