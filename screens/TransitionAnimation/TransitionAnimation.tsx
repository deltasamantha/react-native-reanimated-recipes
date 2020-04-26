import React, {useState} from "react";
import {View, Button, Dimensions} from "react-native";
import {styles} from "./TransitionAnimation.styles";
import CardView from "../../common/CardView/CardView";
import {Card} from "../../models/Card/Card";
import Animated, {not, multiply, interpolate} from "react-native-reanimated";
import {useTransition} from "react-native-redash";

const cards: Array<Card> = [
  {id: "1", type: "main"},
  {id: "2", type: "primary"},
  {id: "3", type: "secondary"},
];

const {width} = Dimensions.get("window");
const transformOrigin = -1 * (width / 2);

export default function TransitionAnimation() {
  const [toggled, setToggled] = useState<0 | 1>(0);
  const transition = useTransition(toggled, not(toggled), toggled);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => {
          const direction = interpolate(index, {
            inputRange: [0, 1, 2],
            outputRange: [-1, 0, 1],
          });
          const rotate = multiply(
            direction,
            interpolate(transition, {
              inputRange: [0, 1],
              outputRange: [0, Math.PI / 8],
            }),
          );
          return (
            <Animated.View
              key={card.id}
              style={[
                styles.overlay,
                {
                  transform: [
                    {translateX: transformOrigin},
                    {rotate: rotate},
                    {translateX: -transformOrigin},
                  ],
                },
              ]}>
              <CardView card={card} />
            </Animated.View>
          );
        })}
      </View>
      <Button title={toggled ? "Reset" : "Start"} primary onPress={() => setToggled(toggled ^ 1)} />
    </View>
  );
}
