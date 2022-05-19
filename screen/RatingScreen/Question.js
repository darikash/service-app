import React from 'react';
import { Text, View, TextInput} from "react-native";
import Slider from "@react-native-community/slider";
import {styles} from './styles'


const Question = (props) => {

    // text, setValue, value
    return (
        <View>
            <Text style={styles.textInGeneral}>{props.text}</Text>
            <View style={{ padding: 5 , flexDirection: "row" }}>
                <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={props.maxValue}
                minimumTrackTintColor="#00ffff"
                maximumTrackTintColor="#00ffff"
                onValueChange={(num) => {
                    props.setValue(num);
                }}
                
                step={1}
                flexGrow ={1}
                />
                <Text style={styles.textInGeneral}>
                    {props.value}
                </Text>
            </View>
        </View>
    )
};

export default Question;