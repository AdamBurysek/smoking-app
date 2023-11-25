import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useAuth, useUser } from "@clerk/clerk-expo";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();
  const { user } = useUser();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [edit, setEdit] = useState(false);

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  const logOut = () => {
    router.back();
    router.push("/(modals)/login");
    signOut();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={"white"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>profile</Text>
        {isSignedIn && <Button title="Log Out" onPress={logOut} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
