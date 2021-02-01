import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Slider from "@react-native-community/slider";
import InputSpinner from "react-native-input-spinner";
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
      shouldShow: true,
      leftColor: "#008fb3"
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

  setShouldShow() {
    this.state.shouldShow = !this.state.shouldShow;
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

        <View style={styles.displayCol}>
          <Button title="Spilting among friends?" onPress={() => this.setShouldShow()} />
          {this.state.shouldShow ? (
            <View style={styles.SplitOuter}>
              <View style={styles.SpiltStyle}>
                <View style={styles.displayRow}>
                  <Text style={{ color: "black", alignSelf: "center", fontSize: 20 }}>Split:        </Text>
                  <InputSpinner
                    min={1}
                    step={1}
                    colorLeft={this.state.leftColor}
                    colorRight={"#4ddbff"}
                    value={this.state.split}
                    textColor='black'
                    fontSize={20}
                    onChange={(num) => {
                      this.updateSplit(num)
                      this.setMinColor()
                    }
                    }
                  />
                </View>
                <View style={{ paddingTop: 20, flexDirection: "row" }}>
                  <Text style={{ color: "black", alignSelf: "center", fontSize: 20 }}>Amount Per Person:      {this.state.amountPerPerson}</Text>
                </View>
              </View>
            </View>) : null}
        </View>
      </View>
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
  },
  displayCol: {
    flexDirection: 'column',
  },
  TextInputStyle: {
    color: 'white',
    backgroundColor: 'black',
    height: 25,
    width: 100,
    borderColor: 'gray',
    borderWidth: 2
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
