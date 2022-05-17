import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorScreen from './screen/CalculatorScreen/index';
import RatingScreen from './screen/RatingScreen/RatingScreen';


function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'black', height: 100}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            headerMode="none"
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}
          >
            
            <Text style={{ color: isFocused ? 'white' : 'gray' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer  style={{backgroundColor: 'black'}}>
      <Tab.Navigator screenOptions={{
    headerShown: false,
  }} style={{backgroundColor: 'black'}} tabBar={(props) => <MyTabBar   style={{backgroundColor: 'black'}} {...props} />}>
        <Tab.Screen  style={{backgroundColor: 'black'}}  name="Calculator" component={CalculatorScreen} />
        <Tab.Screen  name="Ratings" component={RatingScreen} />
      </Tab.Navigator>
    </NavigationContainer>)
}