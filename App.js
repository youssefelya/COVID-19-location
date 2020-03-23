import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoogleMap from  "./components/GoogleMap";
import GooglePosition from './components/GooglePosition';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Text>Open up App.js to start working on your app!</Text>
      <GooglePosition />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
