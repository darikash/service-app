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
          <Text style={{ color: "white" }}>Cost: </Text>
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
    backgroundColor: "black",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  displayRow: {
    flexDirection: "row",
  },
  TextInputStyle: {
    color: "white",
    backgroundColor: "black",
    height: 30,
    borderColor: "gray",
    borderWidth: 2,
  },
});
