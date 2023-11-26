import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Cigarette at 12:34</Text>
      <Text style={styles.title}>45min. ago</Text>
      <Text style={styles.title}>Today</Text>
      <View style={styles.counterBox}>
        <Text style={styles.cigaretteCount}>5</Text>
        <Text style={styles.cigaretteCountText}>Cigarettes</Text>
      </View>
      <View>
        <View>
          <Text>Yesterday</Text>
          <Text>21</Text>
          <Text>every ~32min.</Text>
        </View>
        <View>
          <Text>Left for today</Text>
          <Text>10</Text>
          <Text>every ~42min.</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text>PLUS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderColor: "red",
    borderStyle: "solid",
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  counterBox: {
    backgroundColor: "green",
    padding: 130,
    borderRadius: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cigaretteCount: {
    position: "absolute",

    fontSize: 144,
    fontFamily: "Roboto-Medium",
    top: 25,
  },
  cigaretteCountText: {
    position: "absolute",
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    top: 190,
  },
});
