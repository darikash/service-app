import React from "react";
import { StyleSheet, Alert, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, Dimensions, Platform, PixelRatio } from "react-native";
import Slider from "@react-native-community/slider";

const { height } = Dimensions.get('window');
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / 460;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export default class RatingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      maxTip: 0.00,
      rateFriendliness: 0.00,
      rateDrinks: 0.00,
      rateCorrectOrder: 0.00,
      rateOverallExperience: 0.00,
      finalTip: 0.00,
    };

  }

  rateFriendliness(value) {
    this.state.rateFriendliness = value;
    this.setState(this.state);
    this.finalTipAddition();
  }
  rateDrinks(value) {
    this.state.rateDrinks = value;
    this.setState(this.state);
    this.finalTipAddition();
  }

  rateCorrectOrder(value) {
    this.state.rateCorrectOrder = value;
    this.setState(this.state);
    this.finalTipAddition();
  }

  rateOverallExperience(value) {
    this.state.rateOverallExperience = value;
    this.setState(this.state);
    this.finalTipAddition();
  }

  finalTipAddition() {
    this.state.finalTip = (this.state.maxTip / 4) * (this.state.rateOverallExperience + this.state.rateCorrectOrder + this.state.rateFriendliness + this.state.rateDrinks)
    this.setState(this.state);
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={{
          borderRadius: normalize(20),
          backgroundColor: "white",
          resizeMode: 'stretch',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
          paddingTop: 20,
          overflow: "hidden",
          height: 500, paddingTop: 10, paddingBottom: 10, flexDirection: "column"
        }}>

          <Text style={styles.textInGeneral}> Maximum Tip Contribution</Text>
          <Text style={styles.smallText}>(min 0% to max 30%)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.state.maxTip = num;
              this.finalTipAddition();
            }}
            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}> Rate your waiter friendliness </Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.rateFriendliness(num);
            }}
            step={1}
            flex={1}
          />


          <Text style={styles.textInGeneral}>Were your drinks always filled?</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.rateDrinks(num);
            }}
            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}>Was your order correct?</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>

          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.rateCorrectOrder(num);
            }}
            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}>Rate your overall experience</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.rateOverallExperience(num);
            }}
            step={1}
            flex={1}
          />

        </View>

        <View >
          <View style={styles.TipOuter}>
            <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: "column" }}>
              <Text style={styles.textInGeneral}>
                Your recommended tip % is:{" "}
              </Text>
              <TextInput
                defaultValue={(this.state.finalTip).toFixed(2)}
                textAlign="right"
                editable={false}
              ></TextInput>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.fixToText}>
            <Button
              title="Tip Calculator"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="Rate Your Waiter"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingTop: normalize(100)
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  RateOuter: {
    borderRadius: normalize(20),
    backgroundColor: "white",
    resizeMode: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    overflow: "hidden",
    height: 500
  },
  TipOuter: {
    borderRadius: normalize(20),
    backgroundColor: "white",
    resizeMode: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    overflow: "hidden",
    height: 100
  },
  textInGeneral: {
    color: "black",
    alignSelf: "center",
    fontSize: normalize(28),
    lineHeight: 50
  },
  smallText: {
    color: "black",
    alignSelf: "center",
    fontSize: normalize(20),
    lineHeight: 40
  },
  displayRow: {
    flexDirection: 'row',
    paddingTop: normalize(20),
    // alignSelf: "center"
  }
});


// BUTTON
      //  title="Press me"
      //  disabled
      //  onPress={() => Alert.alert('Cannot press this one')}