import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './components/register';
import Inicio from './components/inicio';

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio/>
      {/* <Register/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002138',
    justifyContent: 'center',
    padding: 10
  },

});
