// DONT NEED IT BUT STARTED WORKING ON IT AND DIDNT WORK
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, Dimensions, Platform, PixelRatio } from "react-native";
import Slider from "@react-native-community/slider";
import InputSpinner from "react-native-input-spinner";
import {styles} from './styles'
import { thisExpression } from "@babel/types";
import Amount from "./Amount";
import TipPercentage from "./TipPercentage";
import DisplayText from "./DisplayText";
//import CalcInput from '../components/CalcInput';
//import CalcResultDisplay from '../components/CalcResultDisplay';

//dismisses the keyboard
const DissmisKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


const RatingScreen = () => {
  const [maxTip, setMaxTip] = useState(0.00)
  const [rateFriendliness, setRateFriendliness] = useState(0.00)
  const [rateDrinks, setRateDrinks] = useState(0.00)
  const [rateCorrectOrder, setRateCorrectOrder] = useState(1)
  const [rateOverallExperience, setRateOverallExperience] = useState(0.00)
  const [finalTip, setFinalTip] = useState(0.00)
  const [amountInputValue, setAmountInputValue] = useState(0.00)
  const [recommendedTipAmount, setRecommendedTipAmount] = useState(0.00)
  const [recommendedTotal, setRecommendedTotal] = useState(0.00)
  const updateAll= (value) => {
    setMaxTip(Number(value));
    setFinalTip(Number(amountPerPerson).toFixed(2));
    setAmountInputValue(Number(displayTipAmount).toFixed(2));
    setRecommendedTipAmount(Number(displayTipAmount).toFixed(2));
    setRecommendedTotal(Number(displayTipAmount).toFixed(2));
  }

console.log(tipPercentage)
return ( <DissmisKeyBoard>
          <ScrollView style={styles.container} scrollEnabled={true}>
            <Amount updateAll={ updateAll}/>
            
            <TipPercentage setTipPercentage={setTipPercentage} tipPercentage={tipPercentage}/>
            <DisplayText displayTipAmount={displayTipAmount}/>
            <DisplayText displayTipAmount={displayTipAmount}/>
          </ScrollView>
         </DissmisKeyBoard>)

}

export default CalculatorScreen;