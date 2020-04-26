import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import OpacityAnimation from "../screens/OpacityAnimation/OpacityAnimation";
import TransitionAnimation from "../screens/TransitionAnimation/TransitionAnimation";

export const ROUTE_HOME = "Home";
export const ROUTE_OPACITY = "Opacity";
export const ROUTE_TRANSITIONS = "Transitions";

const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name={ROUTE_HOME} component={HomeScreen} />
        <AppStack.Screen name={ROUTE_OPACITY} component={OpacityAnimation} />
        <AppStack.Screen name={ROUTE_TRANSITIONS} component={TransitionAnimation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
