import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Last Cigarette at 12:34</Text>
        <Text style={styles.title}>45min. ago</Text>
      </View>

      <Text style={styles.today}>Today</Text>
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
      <TouchableOpacity style={styles.plusBtn}>
        <FontAwesome
          name="plus"
          size={40}
          style={styles.plusBtnIcon}
        ></FontAwesome>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "red",
    borderStyle: "solid",
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  counterBox: {
    backgroundColor: Colors.green,
    padding: 130,
    borderRadius: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cigaretteCount: {
    position: "absolute",
    color: Colors.grey,
    fontSize: 144,
    fontFamily: "Roboto-Medium",
    top: 30,
  },
  cigaretteCountText: {
    position: "absolute",
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    color: Colors.grey,
    top: 190,
  },
  topContainer: {
    display: "flex",
    paddingStart: 25,
    paddingTop: 25,
    alignSelf: "flex-start",
    flexDirection: "column",
  },
  today: {
    fontSize: 48,
    fontFamily: "Roboto-Medium",
  },
  plusBtn: {
    backgroundColor: Colors.grey,
    paddingVertical: 14,
    marginBottom: 40,
    borderRadius: 10,
  },
  plusBtnIcon: {
    color: Colors.green,
    paddingHorizontal: 150,
  },
});
