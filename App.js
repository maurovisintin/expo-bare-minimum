import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Asset } from 'expo-asset';

import Test from './src/components/test';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Stack = createStackNavigator();

export default function App() {
  const imageURI = Asset.fromModule(require('./assets/bitcoin-card.png')).uri;
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="hello"
    >
      <Stack.Screen
          name="hello"
          component={() => (
              <Text>Open up App.tsx to start working on your app!</Text>
          )}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
