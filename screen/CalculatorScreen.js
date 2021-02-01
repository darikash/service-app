import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
//import CalcInput from '../components/CalcInput';
//import CalcResultDisplay from '../components/CalcResultDisplay';

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      tipPercentage: 0,
      displayTipAmount: 0,
      split: 1,
      displayTotal: 0,
      amountPerPerson: 0,
    };
  }

  calculateTip(value) {
    this.state.cost = Number(value);
    this.state.displayTipAmount = Number(value) * this.state.tipPercentage;
    this.state.amountPerPerson =
      (this.state.cost + this.state.displayTipAmount) / this.state.split;
    this.state.displayTotal = this.state.cost + this.state.displayTipAmount;
    this.setState(this.state);
  }

  updateTip(value) {
    this.state.tipPercentage = Number(value) * 0.01;
    this.setState(this.state);
    this.calculateTip(this.state.cost);
  }

  updateSplit(value) {
    this.state.split = Number(value);
    this.setState(this.state);
    this.calculateTip(this.state.cost);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayRow}>
          <View style={styles.titleText}></View>
          <Text style={styles.titleText}>Cost: </Text>
          <TextInput
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={this.calculateTip.bind(this)}
          ></TextInput>
        </View>

        <View style={styles.displayRow}>
          <Text style={{ color: "white" }}>Split: </Text>
          <TextInput
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={this.updateSplit.bind(this)}
          ></TextInput>
        </View>

        <View style={styles.displayRow}>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.updateTip(num);
            }}
            step={1}
          />
          <Text style={{ color: "white" }}>
            {(this.state.tipPercentage * 100).toFixed(0)}{" "}
          </Text>
        </View>

        <View style={styles.displayRow}>
          <Text style={{ color: "white" }}>
            Tip Total: {this.state.displayTipAmount}
          </Text>
        </View>

        <View style={styles.displayRow}>
          <Text style={{ color: "white" }}>
            Amount Per Person: {this.state.amountPerPerson}
          </Text>
        </View>

        <View style={styles.displayRow}>
          <Text style={{ color: "white" }}>
            Total: {this.state.displayTotal}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
    justifyContent: "flex-start",
    paddingTop: 100,

    // addded paddinghorizontal
    paddingHorizontal: 100
  },
  displayRow: {
    flexDirection: "row",
    // addded alignIntems
    alignItems: "center",
  },
  TextInputStyle: {
    color: "white",
    backgroundColor: "black",
    // changed hight from 30 to 50 
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: 100,
  },
  // added titleText
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  SpiltStyle: {
    backgroundColor: "white",
    resizeMode: 'stretch',
    height: 150,
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
  }

})
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
