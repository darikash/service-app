import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import InputSpinner from "react-native-input-spinner";
//import CalcInput from '../components/CalcInput';
//import CalcResultDisplay from '../components/CalcResultDisplay';

//dismisses the keyboard
const DissmisKeyBoard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);



export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0.00,
      tipPercentage: 0.00,
      displayTipAmount: 0.00,
      split: 1,
      displayTotal: 0.00,
      amountPerPerson: 0.00,
      shouldShow: false,
      leftColor: "#008fb3",
      tipPerPerson: 0
    };
  }





  /*
   * given a cost of the receipt, updates all the number fields in the calculator.
   */
  updateAll(value) {
    this.state.cost = Number(value);
    this.state.displayTipAmount = Number(value) * this.state.tipPercentage;
    this.state.amountPerPerson =
      (this.state.cost + this.state.displayTipAmount) / this.state.split;
    this.state.displayTotal = this.state.cost + this.state.displayTipAmount;
    this.state.displayTotal.toFixed(2);
    this.state.amountPerPerson.toFixed(2);
    this.state.displayTipAmount.toFixed(2);
    this.updateTipPerPerson();
    this.setState(this.state);
  }



  updateTipPerPerson() {
    this.state.tipPerPerson = this.state.displayTipAmount / this.state.split;
    this.state.tipPerPerson.toFixed(2);
    this.setState(this.state);
  }


  updateTip(value) {
    this.state.tipPercentage = (Number(value) * 0.01).toFixed(2);
    this.setState(this.state);
    this.updateAll(this.state.cost);

  }

  updateSplit(value) {
    this.state.split = Number(value).toFixed(2);
    this.setState(this.state);
    this.updateAll(this.state.cost);
  }



  setShouldShow() {
    this.state.shouldShow = !this.state.shouldShow;
    Keyboard.dismiss()
    this.setState(this.state);
  }

  setMinColor() {
    if (this.state.split == 1) {
      this.state.leftColor = "#008fb3"
    } else {
      this.state.leftColor = "#4ddbff"
    }
    this.setState(this.state);
  }

  render() {
    return (
      <DissmisKeyBoard>
        <View style={styles.container}>
          <View style={styles.displayCol}>
            <View style={styles.SplitOuter}>
              <View style={styles.CostOuter}>


                <View style={styles.displayRow}>
                  <Text style={styles.textInGeneral}>Amount:  </Text>
                  <TextInput
                    style={styles.TextInputStyle}
                    keyboardType="numeric"
                    onChangeText={this.updateAll.bind(this)}
                    textAlign="right"
                    maxLength={7}
                  ></TextInput>
                </View>



                <View style={{ paddingTop: 20, flexDirection: "row" }}>
                  <Text style={styles.textInGeneral}>Tip % : </Text>
                  <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={30}
                    minimumTrackTintColor="#00ffff"
                    maximumTrackTintColor="#00ffff"
                    onValueChange={(num) => {
                      this.updateTip(num);
                    }}
                    step={1}
                  />
                  <Text style={styles.textInGeneral}>
                    {(this.state.tipPercentage * 100).toFixed(0)}{"%"}
                  </Text>
                </View>



                <View style={styles.displayRow}>
                  <Text style={styles.textInGeneral}>
                    Tip Total:{" "}
                  </Text>
                  <TextInput
                    style={styles.TextInputHiddenBorderStyle}
                    defaultValue={(this.state.displayTipAmount).toFixed(2)}
                    keyboardType="numeric"
                    onChangeText={this.updateAll.bind(this)}
                    textAlign="right"
                    editable={false}
                  ></TextInput>
                </View>



                <View style={styles.displayRow}>
                  <Text style={styles.textInGeneral}>
                    Total:{"        "}
                  </Text>
                  <TextInput
                    style={styles.TextInputHiddenBorderStyle}
                    defaultValue={this.state.displayTotal.toFixed(2)}
                    keyboardType="numeric"
                    onChangeText={this.updateAll.bind(this)}
                    textAlign="right"
                    editable={false}
                  ></TextInput>
                </View>


              </View>
            </View>
          </View>










          <View style={styles.displayCol}>
            <Button title="Spilting among friends?" onPress={() => this.setShouldShow()} />
            {this.state.shouldShow ? (
              <View style={styles.SplitOuter}>
                <View style={styles.SpiltStyle}>



                  <View style={styles.displayRow}>
                    <Text style={styles.textInGeneral}>Split:        </Text>
                    <InputSpinner
                      min={1}
                      step={1}
                      colorLeft={this.state.leftColor}
                      colorRight={"#4ddbff"}
                      value={this.state.split}
                      textColor='black'
                      fontSize={20}
                      maxLength={4}
                      onChange={(num) => {
                        this.updateSplit(num)
                        this.setMinColor()
                      }
                      }
                    />
                  </View>



                  <View style={{ paddingTop: 20, flexDirection: "row" }}>
                    <Text style={styles.textInGeneral}>Split Tip:</Text>
                    <TextInput
                      style={styles.TextInputHiddenBorderStyle}
                      defaultValue={this.state.tipPerPerson.toFixed(2)}
                      keyboardType="numeric"
                      onChangeText={this.updateAll.bind(this)}
                      textAlign="right"
                      editable={false}
                    ></TextInput>
                  </View>



                  <View style={{ paddingTop: 20, flexDirection: "row" }}>
                    <Text style={styles.textInGeneral}>Split Total:</Text>
                    <TextInput
                      style={styles.TextInputHiddenBorderStyle}
                      defaultValue={this.state.amountPerPerson.toFixed(2)}
                      keyboardType="numeric"
                      onChangeText={this.updateAll.bind(this)}
                      textAlign="right"
                      editable={false}
                    ></TextInput>
                  </View>



                </View>
              </View>) : null}
          </View>
        </View>
      </DissmisKeyBoard>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    paddingTop: 100

  },
  displayRow: {
    flexDirection: 'row',
    paddingTop: 20,
    // alignSelf: "center"
  },
  textInGeneral: {
    color: "black",
    alignSelf: "center",
    fontSize: 30
  },
  displayCol: {
    flexDirection: 'column'
  },
  TextInputStyle: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'white',
    height: 45,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1
  },
  TextInputHiddenBorderStyle: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'white',
    height: 45,
    width: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1
  },
  SpiltStyle: {
    backgroundColor: "white",
    resizeMode: 'stretch',
    height: 250,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    overflow: "hidden",
  },
  SplitOuter: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  CostOuter: {
    borderRadius: 20,
    backgroundColor: "white",
    resizeMode: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    overflow: "hidden",
    height: 280
    ,
  }
});
// create a constant placeholder 
const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <TextInputStyle
      //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
  //first change

  //second push
  //sdfsdf 

  ;
