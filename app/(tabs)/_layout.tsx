import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
        tabBarActiveTintColor: Colors.light.tint,
        tabBarLabelStyle: { fontSize: 16 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cigar" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "History & Stats",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
