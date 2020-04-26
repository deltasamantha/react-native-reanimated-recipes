import {StyleSheet} from "react-native";
import {cloudContainer, cloudBorder} from "../../Theme/Colors";

const CLOUD_SIZE = 200;
const BUBBLE_SIZE = 20;

export const styles = StyleSheet.create({
  cloudContainer: {
    flexDirection: "row",
    width: CLOUD_SIZE,
    height: CLOUD_SIZE,
    borderRadius: CLOUD_SIZE / 2,
    borderBottomRightRadius: 0,
    borderWidth: 4,
    backgroundColor: cloudContainer,
    borderColor: cloudBorder,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  bubble: {
    height: BUBBLE_SIZE,
    width: BUBBLE_SIZE,
    borderRadius: BUBBLE_SIZE / 2,
    backgroundColor: cloudBorder,
  },
});
