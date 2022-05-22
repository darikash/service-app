import React from 'react';
import Slider from "@react-native-community/slider";
import { Text, View, TextInput} from "react-native";
import {styles} from './styles'
const tipPercentage = (props) => {
    return (
                <View style={{ display: 'flex', flexDirection: "row" , paddingTop:20}}>
                    <Text style={styles.textInGeneral}>Tip%: </Text>
                    <Slider
                        style={{ flex: 2 }}
                        minimumValue={0}
                        maximumValue={30}
                        minimumTrackTintColor="#00ffff"
                        maximumTrackTintColor="#00ffff"
                        onValueChange={(num) => {
                            props.setTipPercentage(num);
                        }}
                        step={1}
                        flex={1}
                        />
                       
                    <Text style={styles.textInGeneral}>
                    {props.tipPercentage}{"%"}
                    </Text>
               </View> 
    )
}

export default tipPercentage;