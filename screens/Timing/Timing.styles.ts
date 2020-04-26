import {StyleSheet} from "react-native";
import {cloudBorder, cloudContainer} from "../../Theme/Colors";

const CLOUD_SIZE = 200;

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cloudContainer: {
    width: CLOUD_SIZE,
    height: CLOUD_SIZE,
    borderRadius: CLOUD_SIZE / 2,
    borderBottomRightRadius: 0,
    borderWidth: 4,
    backgroundColor: cloudContainer,
    borderColor: cloudBorder,
    alignItems: "center",
    justifyContent: "center",
  },
});
