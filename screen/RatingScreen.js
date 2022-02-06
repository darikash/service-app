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

            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}> Rate your waiter friendliness </Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.updateTip(num);
            }}
            step={1}
            flex={1}
          />


          <Text style={styles.textInGeneral}>Were your drinks always filled?</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.updateTip(num);
            }}
            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}>Was your order correct?</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>

          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.updateTip(num);
            }}
            step={1}
            flex={1}
          />

          <Text style={styles.textInGeneral}>Rate your overall experience</Text>
          <Text style={styles.smallText}>(0 being the worst and 10 being best)</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor="#00ffff"
            maximumTrackTintColor="#00ffff"
            onValueChange={(num) => {
              this.updateTip(num);
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