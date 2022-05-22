import React from 'react';
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'
const Amount = (props) => {

  return (
    <View style={{flexDirection: 'row'}}>
    <Text style={styles.textInGeneral}>Amount:  </Text>
    <TextInput
      style={styles.TextInputStyle}
      keyboardType = 'number-pad'
      onChangeText={newText => {
        var result = ''
        const mapSet = new Set(['1','2','3','4','5','6','7','8','9','0', '.'])
        for(let n in newText){
          const currNum = newText[n]
          console.log(currNum)
          if(mapSet.has(currNum)){
            result = result + currNum;
          }else{
            alert("I only take in numbers and decimals")
          }
        }
          props.updateAll(result)
        
      }
    }
      value={props.initValue}
      textAlign="right"
      maxLength={8}
    />
  </View>
  );
}

export default Amount;