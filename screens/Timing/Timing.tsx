import React from "react";
import {View} from "react-native";
import {styles} from "./Timing.styles";
import Cloud from "../../common/Cloud/Cloud";
import Animated, {
  Value,
  useCode,
  block,
  set,
  Clock,
  timing,
  Easing,
  cond,
  clockRunning,
  not,
  startClock,
  eq,
} from "react-native-reanimated";

const runTiming = (clock: Animated.Clock) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(1),
    duration: 2000,
    easing: Easing.linear,
  };
  return block([
    cond(not(clockRunning(clock)), startClock(clock)),
    timing(clock, state, config),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, cond(eq(state.position, 1), 0, 1)),
    ]),
    state.position,
  ]);
};

export default function Timing() {
  const progress = new Value(0);
  const clock = new Clock();
  useCode(() => block([set(progress, runTiming(clock))]), []);

  return (
    <>
      <View style={styles.rootContainer}>
        <Cloud {...{progress}} />
      </View>
    </>
  );
}
