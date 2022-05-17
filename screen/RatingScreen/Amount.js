import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'
const Amount = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
    <Text style={styles.textInGeneral}>Amount:  </Text>
    <TextInput
      style={styles.TextInputStyle}
      keyboardType="numeric"
      onChangeText={newText => 
      props.updateAll(Number(newText))}
      textAlign="right"
      maxLength={8}
    />
  </View>
  );
}

export default Amount;