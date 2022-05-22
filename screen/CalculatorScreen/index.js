import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, Dimensions, Platform, PixelRatio } from "react-native";
import Slider from "@react-native-community/slider";
import InputSpinner from "react-native-input-spinner";
import {styles} from './styles'
import { thisExpression } from "@babel/types";
import Amount from "./Amount";
import TipPercentage from "./TipPercentage";
import DisplayText from "./DisplayText";
import SplitScreen from "./SplitScreen";
import { cos, set } from "react-native-reanimated";
import { State } from "react-native-gesture-handler";
//import CalcInput from '../components/CalcInput';
//import CalcResultDisplay from '../components/CalcResultDisplay';

//dismisses the keyboard
const DissmisKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);



const CalculatorScreen = () => {
  const [cost, setCost] = useState(0.00)
  const [tipPercentage, setTipPercentage] = useState(0.00)
  const [displayTipAmount, setDisplayTipAmount] = useState(0.00)
  const [displayTotal, setDisplayTotal] = useState(0.00)
  useEffect(() => {
    setDisplayTipAmount(cost * tipPercentage / 100)
    setDisplayTotal(parseFloat(cost) + parseFloat(displayTipAmount))
  })

return ( 
          <SafeAreaView style={{...styles.container,  flexGrow: 1}} scrollEnabled={true}>
            <View style={{borderRadius: 15, borderWidth: 1, borderColor: 'white', display: 'flex', padding: 20, height: 320, justifyContent: 'space-between'}}>
              <Amount updateAll={setCost} initValue={cost}/>
              <TipPercentage setTipPercentage={setTipPercentage} tipPercentage={tipPercentage}/>
              <DisplayText displayAmount={displayTipAmount} text={"Tip Total:"}/>
              <DisplayText displayAmount={displayTotal} text={"Total:"}/>
            </View>
            <SplitScreen totalAmount={cost} tipPercentage={tipPercentage / 100}/>
          </SafeAreaView>
        )

}

export default CalculatorScreen;
//   constructor(props) {
//     super(props);
//     this.state = {
//       cost: 0.00,
//       tipPercentage: 0.00,
//       displayTipAmount: 0.00,
//       split: 1,
//       displayTotal: 0.00,
//       amountPerPerson: 0.00,
//       shouldShow: false,
//       leftColor: "#008fb3",
//       tipPerPerson: 0,
//       screenHeight: 0
//     };
//   }

//   /*
//    * given a cost of the receipt, updates all the number fields in the calculator.
//    */



//   updateTipPerPerson() {
//     this.state.tipPerPerson = this.state.displayTipAmount / this.state.split;
//     this.state.tipPerPerson.toFixed(2);
//     this.setState(this.state);
//   }


//   updateTip(value) {
//     this.state.tipPercentage = (Number(value) * 0.01).toFixed(2);
//     this.setState(this.state);
//     this.updateAll(this.state.cost);
//   }

//   updateSplit(value) {
//     this.state.split = Number(value).toFixed(2);
//     this.setState(this.state);
//     this.updateAll(this.state.cost);
//   }



//   setShouldShow() {
//     this.state.shouldShow = !this.state.shouldShow;
//     Keyboard.dismiss()
//     this.setState(this.state);
//   }


//   setMinColor() {
//     if (this.state.split == 1) {
//       this.state.leftColor = "#008fb3"
//     } else {
//       this.state.leftColor = "#4ddbff"
//     }
//     this.setState(this.state);
//   }




//   render() {
//     return (
//       <DissmisKeyBoard>
//         <ScrollView
//           contentContainerStyle={styles.scrollview}
//           scrollEnabled={true}
//           onContentSizeChange={this.onContentSizeChange}
//         >

//           <View style={styles.SplitOuter}>
//             <View style={styles.CostOuter}>
//               <Amount/>
//               <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                 <Text style={styles.textInGeneral}>Tip % : </Text>
//                 <Slider
//                   style={{ width: 200, height: 40 }}
//                   minimumValue={0}
//                   maximumValue={30}
//                   minimumTrackTintColor="#00ffff"
//                   maximumTrackTintColor="#00ffff"
//                   onValueChange={(num) => {
//                     this.updateTip(num);
//                   }}
//                   step={1}
//                   flex={1}
//                 />
//                 <Text style={styles.textInGeneral}>
//                   {(this.state.tipPercentage * 100).toFixed(0)}{"%"}
//                 </Text>
//               </View>
//               <View style={styles.displayCol}>
//                 <Text style={styles.textInGeneral}>
//                   Tip Total:{" "}
//                 </Text>
//                 <TextInput
//                   style={styles.TextInputHiddenBorderStyle}
//                   defaultValue={(this.state.displayTipAmount).toFixed(2)}
//                   keyboardType="numeric"
//                   onChangeText={this.updateAll.bind(this)}
//                   textAlign="right"
//                   editable={false}
//                 ></TextInput>
//               </View>
//               <View style={styles.displayCol}>
//                 <Text style={styles.textInGeneral}>
//                   Total:{"        "}
//                 </Text>
//                 <TextInput
//                   style={styles.TextInputHiddenBorderStyle}
//                   defaultValue={this.state.displayTotal.toFixed(2)}
//                   keyboardType="numeric"
//                   onChangeText={this.updateAll.bind(this)}
//                   textAlign="right"
//                   editable={false}
//                 ></TextInput>
//               </View>
//             </View>
//           </View>
//           <View style={styles.displayCol}>
//             <Button title="Spilting among friends?" onPress={() => this.setShouldShow()} />
//             {this.state.shouldShow ? (
//               <View style={styles.SplitOuter}>
//                 <View style={styles.SpiltStyle}>
//                   <View style={styles.displayCol}>
//                     <Text style={styles.textInGeneral}>Split:        </Text>
//                     <InputSpinner
//                       min={1}
//                       step={1}
//                       colorLeft={this.state.leftColor}
//                       colorRight={"#4ddbff"}
//                       value={this.state.split}
//                       textColor='black'
//                       fontSize={20}
//                       maxLength={4}
//                       onChange={(num) => {
//                         this.updateSplit(num)
//                         this.setMinColor()
//                       }
//                       }
//                     />
//                   </View>
//                   <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                     <Text style={styles.textInGeneral}>Split Tip:</Text>
//                     <TextInput
//                       style={styles.TextInputHiddenBorderStyle}
//                       defaultValue={this.state.tipPerPerson.toFixed(2)}
//                       keyboardType="numeric"
//                       onChangeText={this.updateAll.bind(this)}
//                       textAlign="right"
//                       editable={false}
//                     ></TextInput>
//                   </View>
//                   <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                     <Text style={styles.textInGeneral}>Split Total:</Text>
//                     <TextInput
//                       style={styles.TextInputHiddenBorderStyle}
//                       defaultValue={this.state.amountPerPerson.toFixed(2)}
//                       keyboardType="numeric"
//                       onChangeText={this.updateAll.bind(this)}
//                       textAlign="right"
//                       editable={false}
//                     ></TextInput>
//                   </View>
//                 </View>
//               </View>) : null}
//           </View>
//         </ScrollView>
//       </DissmisKeyBoard >

//     );
//   }

// }

// //first change

// //second push
// //sdfsdf 

// ;

// /*
// <ScrollView
//             contentContainerStyle={styles.scrollview}
//             scrollEnabled={true}
//             onContentSizeChange={this.onContentSizeChange}
//           >
//           </ScrollView>
// <View style={styles.SplitOuter}>
//             <View style={styles.CostOuter}>
//               <View style={styles.displayCol}>
//                 <Text style={styles.textInGeneral}>Amount:  </Text>
//                 <TextInput
//                   style={styles.TextInputStyle}
//                   keyboardType="numeric"
//                   onChangeText={this.updateAll.bind(this)}
//                   textAlign="right"
//                   maxLength={7}
//                 ></TextInput>
//               </View>
//               <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                 <Text style={styles.textInGeneral}>Tip % : </Text>
//                 <Slider
//                   style={{ width: 200, height: 40 }}
//                   minimumValue={0}
//                   maximumValue={30}
//                   minimumTrackTintColor="#00ffff"
//                   maximumTrackTintColor="#00ffff"
//                   onValueChange={(num) => {
//                     this.updateTip(num);
//                   }}
//                   step={1}
//                   flex={1}
//                 />
//                 <Text style={styles.textInGeneral}>
//                   {(this.state.tipPercentage * 100).toFixed(0)}{"%"}
//                 </Text>
//               </View>
//               <View style={styles.displayCol}>
//                 <Text style={styles.textInGeneral}>
//                   Tip Total:{" "}
//                 </Text>
//                 <TextInput
//                   style={styles.TextInputHiddenBorderStyle}
//                   defaultValue={(this.state.displayTipAmount).toFixed(2)}
//                   keyboardType="numeric"
//                   onChangeText={this.updateAll.bind(this)}
//                   textAlign="right"
//                   editable={false}
//                 ></TextInput>
//               </View>
//               <View style={styles.displayCol}>
//                 <Text style={styles.textInGeneral}>
//                   Total:{"        "}
//                 </Text>
//                 <TextInput
//                   style={styles.TextInputHiddenBorderStyle}
//                   defaultValue={this.state.displayTotal.toFixed(2)}
//                   keyboardType="numeric"
//                   onChangeText={this.updateAll.bind(this)}
//                   textAlign="right"
//                   editable={false}
//                 ></TextInput>
//               </View>
//             </View>
//           </View>
//           <View style={styles.displayCol}>
//             <Button title="Spilting among friends?" onPress={() => this.setShouldShow()} />
//             {this.state.shouldShow ? (
//               <View style={styles.SplitOuter}>
//                 <View style={styles.SpiltStyle}>
//                   <View style={styles.displayCol}>
//                     <Text style={styles.textInGeneral}>Split:        </Text>
//                     <InputSpinner
//                       min={1}
//                       step={1}
//                       colorLeft={this.state.leftColor}
//                       colorRight={"#4ddbff"}
//                       value={this.state.split}
//                       textColor='black'
//                       fontSize={20}
//                       maxLength={4}
//                       onChange={(num) => {
//                         this.updateSplit(num)
//                         this.setMinColor()
//                       }
//                       }
//                     />
//                   </View>
//                   <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                     <Text style={styles.textInGeneral}>Split Tip:</Text>
//                     <TextInput
//                       style={styles.TextInputHiddenBorderStyle}
//                       defaultValue={this.state.tipPerPerson.toFixed(2)}
//                       keyboardType="numeric"
//                       onChangeText={this.updateAll.bind(this)}
//                       textAlign="right"
//                       editable={false}
//                     ></TextInput>
//                   </View>
//                   <View style={{ paddingTop: 20, flexDirection: "row" }}>
//                     <Text style={styles.textInGeneral}>Split Total:</Text>
//                     <TextInput
//                       style={styles.TextInputHiddenBorderStyle}
//                       defaultValue={this.state.amountPerPerson.toFixed(2)}
//                       keyboardType="numeric"
//                       onChangeText={this.updateAll.bind(this)}
//                       textAlign="right"
//                       editable={false}
//                     ></TextInput>
//                   </View>
//                 </View>
//               </View>) : null}
//           </View>
// */