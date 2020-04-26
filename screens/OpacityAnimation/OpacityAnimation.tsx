import React, {useState} from "react";
import {View, Button} from "react-native";
import {styles} from "./OpacityAnimation.styles";
import Card from "../../common/Card/Card";
import Animated, {
  Value,
  useCode,
  cond,
  eq,
  Clock,
  add,
  interpolate,
  Extrapolate,
  startClock,
  set,
  not,
} from "react-native-reanimated";
import {useClock} from "react-native-redash";

export default function OpacityAnimation() {
  const clock = useClock([]);
  const startTime = new Value(0);
  const duration = 500;
  const endTime = add(startTime, duration);
  const startAnimation = new Value(0);
  const from = new Value(0);
  const to = new Value(1);
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP,
  });
  useCode(
    () => [
      cond(
        eq(startAnimation, 1),
        [
          startClock(clock),
          set(from, opacity),
          set(to, not(to)),
          set(startTime, clock),
          set(startAnimation, 0),
        ],
        [],
      ),
    ],
    [],
  );

  const onTapToggle = () => {
    startAnimation.setValue(1);
  };
  return (
    <View style={styles.rootContainer}>
      <Animated.View style={{opacity}}>
        <Card />
      </Animated.View>
      <Button title="Toggle" onPress={onTapToggle} />
    </View>
  );
}
