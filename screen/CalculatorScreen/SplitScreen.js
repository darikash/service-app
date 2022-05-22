import React , { useState, useEffect } from 'react';
import { Text, View, TextInput, Button} from "react-native";
import InputSpinner from 'react-native-input-spinner';
import DisplayText from './DisplayText';
import {styles} from './styles'

const SplitScreen = (props) => {
    const [showSplit, setShowSplit] = useState(false);
    const [split, setSplit] = useState(1);
    
    const totalAmount = props.totalAmount
    const tipPercentage = props.tipPercentage
    const [tipPerPerson, setTipPerPerson] = useState(tipPercentage * totalAmount)
    const [amountPerPerson, setAmountPerPerson] = useState(tipPerPerson + totalAmount);
    

    const setShouldShow = () =>{
        setShowSplit(!showSplit)
    }

    useEffect(() => {
        setTipPerPerson(totalAmount / split * tipPercentage )
        setAmountPerPerson(parseFloat(totalAmount / split) + parseFloat(tipPerPerson))
    })

    return (
        
        <View style={{flexDirection: "column"}}>
             <Button title="Spilting among friends?" onPress={setShouldShow} />
             {showSplit ? (

                  <View style={{borderRadius: 15, borderWidth: 1, borderColor: 'white', display: 'flex', padding: 20, height: 250, justifyContent: 'space-between'}}>
                   <View style={{flexDirection: 'row'}}>
                     <Text style={styles.textInGeneral}>Split:        </Text>
                     <InputSpinner
                       min={1}
                       step={1}
                       colorLeft={'gray'}
                       colorRight={"#4ddbff"}
                       value={split}
                       textColor='white'
                       fontSize={20}
                       maxLength={4}
                       onChange={(num) => {
                         setSplit(num)
                       }
                       }
                     />
                   </View>
                   <DisplayText text={"Split Tip:"} displayAmount={tipPerPerson}/>
                   <DisplayText text={"Split Total:"} displayAmount={amountPerPerson}/>
                 </View>) : null}
        </View>
    )
    
}

export default SplitScreen;