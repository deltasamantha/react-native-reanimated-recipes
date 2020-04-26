/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import {SafeAreaView, View, StatusBar, Button, StyleSheet} from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rootContainer}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {flex: 1, alignContent: "center", justifyContent: "center"},
});

export default App;
