import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

export default function TabOneScreen() {
  const [cigarettes, setCigarettes] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.lastCigarette}>Last Cigarette at 12:34</Text>
        <Text style={styles.lastCigaretteTime}>45min. ago</Text>
      </View>

      <Text style={styles.today}>Today</Text>
      <View style={styles.counterBox}>
        <Text style={styles.cigaretteCount}>{cigarettes}</Text>
        <Text style={styles.cigaretteCountText}>Cigarettes</Text>
      </View>
      <View style={styles.statsContainer}>
        <View>
          <Text style={styles.statsDay}>Yesterday</Text>
          <Text style={styles.statsYesterdayNumber}>21</Text>
          <Text style={styles.statsTime}>every ~32min.</Text>
        </View>
        <View>
          <Text style={styles.statsDay}>Left for today</Text>
          <Text style={styles.statsTodayNumber}>10</Text>
          <Text style={styles.statsTime}>every ~42min.</Text>
        </View>
      </View>
      <View style={styles.plusBtnContainer}>
        <TouchableOpacity
          style={styles.plusBtn}
          onPress={() => setCigarettes(cigarettes + 1)}
        >
          <FontAwesome
            name="plus"
            size={40}
            style={styles.plusBtnIcon}
          ></FontAwesome>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
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
  plusBtnContainer: {
    marginBottom: 40,
  },
  plusBtn: {
    backgroundColor: Colors.grey,
    paddingVertical: 14,

    borderRadius: 10,
  },
  plusBtnIcon: {
    color: Colors.green,
    paddingHorizontal: 150,
  },
  lastCigarette: {
    fontFamily: "Roboto-Medium",
    fontSize: 24,
  },
  lastCigaretteTime: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: Colors.grey,
  },
  statsContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsDay: { fontFamily: "Roboto-Medium", fontSize: 18 },
  statsYesterdayNumber: {
    fontFamily: "Roboto-Medium",
    fontSize: 24,
    color: "red",
  },
  statsTodayNumber: {
    fontFamily: "Roboto-Medium",
    fontSize: 24,
    color: Colors.green,
  },
  statsTime: { fontFamily: "Roboto-Medium", fontSize: 18, color: Colors.grey },
});
