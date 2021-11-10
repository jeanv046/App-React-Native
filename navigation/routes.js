import React, { useContext, useEffect, useState } from "react";
import maps from "../components/maps/";
import Inicio from "../components/inicio";
import Register from "../components/register";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
/* Context */
import { AuthContext } from "./AuthProvider";
/* Firebase */
import firebase from "../firebase";
import Chat from "../components/Chat";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (initializing) return null;

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(255, 45, 85)",
      background: "#002138",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Inicio} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maps"
        component={maps}
        options={{
          headerRight: () => (
            <Ionicons
              name="exit"
              size={24}
              color="black"
              onPress={() => logout()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          headerRight: () => (
            <Ionicons
              name="exit"
              size={24}
              color="black"
              onPress={() => logout()}
            />
          ),
          title: "Chat",
        }}
      />
    </Stack.Navigator>
  );
};
