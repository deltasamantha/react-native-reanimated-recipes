import React from "react";
import {View, Button, Text} from "react-native";
import {styles} from "./HomeScreen.styles";
import {useNavigation} from "@react-navigation/native";
import {ROUTE_OPACITY, ROUTE_TRANSITIONS, ROUTE_TIMING} from "../../navigation/AppNavigator";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <Button
        title="Opacity Animation"
        onPress={() => {
          navigation.navigate(ROUTE_OPACITY);
        }}
      />
      <Button
        title="Transition Animation"
        onPress={() => {
          navigation.navigate(ROUTE_TRANSITIONS);
        }}
      />
      <Button
        title="Timing Animation"
        onPress={() => {
          navigation.navigate(ROUTE_TIMING);
        }}
      />
    </View>
  );
}
