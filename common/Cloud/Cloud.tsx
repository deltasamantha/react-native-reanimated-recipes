import React from "react";
import {View} from "react-native";
import {styles} from "./Cloud.styles";
import Animated, {interpolate, Extrapolate} from "react-native-reanimated";

interface Props {
  progress: Animated.Value<number>;
}

export default function Cloud({progress}: Props) {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.cloudContainer}>
      {bubbles.map(i => {
        const start = i * delta;
        const end = start + delta;
        const scale = interpolate(progress, {
          inputRange: [start, end],
          outputRange: [1, 1.5],
          extrapolate: Extrapolate.CLAMP,
        });
        return (
          <Animated.View
            key={i}
            style={[
              styles.bubble,
              {
                transform: [{scale}],
              },
            ]}
          />
        );
      })}
    </View>
  );
}
