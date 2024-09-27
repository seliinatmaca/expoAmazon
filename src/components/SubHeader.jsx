import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
export default function SubHeader() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
    >
      <Feather name="map-pin" size={16} color={"#000000"} />
      <Text style={styles.deliver}>Delive to Turkey - 234234</Text>
      <SimpleLineIcons name="arrow-down" color="#000000" size={10} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
    paddingHorizontal: 6,
  },
});
