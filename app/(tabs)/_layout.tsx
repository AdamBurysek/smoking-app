import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 18,
          paddingBottom: 15,
        },
        tabBarActiveBackgroundColor: Colors.grey,
        tabBarStyle: {
          // marginBottom: 20,
          // paddingBottom: 10,
          // marginLeft: 50,
          // marginRight: 50,
        },
        tabBarIcon: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "History & Stats",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
