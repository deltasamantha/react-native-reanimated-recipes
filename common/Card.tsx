import React from "react";
import {View, StyleSheet} from "react-native";
import {
  mainCardColor,
  mainCardBorderColor,
  primaryCardBorderColor,
  secondaryCardBorderColor,
  primaryCardColor,
  secondaryCardColor,
} from "../Theme/Colors";

type CardType = "main" | "primary" | "secondary";

interface Props {
  type: CardType;
}

const getBorderColor = (type: CardType) => {
  switch (type) {
    case "main":
      return mainCardBorderColor;
    case "primary":
      return primaryCardBorderColor;
    case "secondary":
      return secondaryCardBorderColor;
    default:
      return mainCardBorderColor;
  }
};

const getCardColor = (type: CardType) => {
  switch (type) {
    case "main":
      return mainCardColor;
    case "primary":
      return primaryCardColor;
    case "secondary":
      return secondaryCardColor;
    default:
      return mainCardColor;
  }
};

const Card: React.FC<Props> = ({type}: Props) => {
  return (
    <View
      style={[
        styles.card,
        {borderColor: getBorderColor(type), backgroundColor: getCardColor(type)},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 170,
    margin: 40,
    borderRadius: 10,
    borderWidth: 4,
  },
});

export default Card;
