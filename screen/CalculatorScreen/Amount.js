import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'
const Amount = ({updateAll}) => {
  return (
    <View style={{flexDirection: 'row'}}>
    <Text style={styles.textInGeneral}>Amount:  </Text>
    <TextInput
      style={styles.TextInputStyle}
      keyboardType="numeric"
      onChangeText={newText => updateAll(newText)}
      textAlign="right"
      maxLength={8}
    ></TextInput>
  </View>
  );
}

export default Amount;