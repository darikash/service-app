import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'
const Amount = ({updateAll}) => {
  return (
    <View style={{...styles.displayCol}}>
    <Text style={styles.textInGeneral}>Amount:  </Text>
    <TextInput
      style={styles.TextInputStyle}
      keyboardType="numeric"
      onChange={(event) => updateAll(event.target.value)}
      textAlign="right"
      maxLength={8}
    ></TextInput>
  </View>
  );
}

export default Amount;