import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Register from './components/register';
import Inicio from './components/inicio';
import maps from './components/maps';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#002138',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='maps'>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="login" component={Inicio} />
        <Stack.Screen name="maps" component={maps} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



