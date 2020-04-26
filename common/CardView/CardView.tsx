import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {
  mainCardColor,
  mainCardBorderColor,
  primaryCardBorderColor,
  secondaryCardBorderColor,
  primaryCardColor,
  secondaryCardColor,
} from "../../Theme/Colors";
import {CardType, Card} from "../../models/Card/Card";

interface CardViewProps {
  card: Card;
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

const CardView: React.FC<CardViewProps> = ({card}: CardViewProps) => {
  return (
    <View
      style={[
        styles.card,
        {borderColor: getBorderColor(card.type), backgroundColor: getCardColor(card.type)},
      ]}
    />
  );
};

const {width} = Dimensions.get("window");
const CARD_ASPECT_RATIO = 1324 / 863;
export const CARD_WIDTH = width - 8 * 8;
export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    borderWidth: 4,
  },
});

export default CardView;
