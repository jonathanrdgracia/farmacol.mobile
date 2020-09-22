import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux';
import {store,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { YellowBox } from 'react-native'

YellowBox .ignoreWarnings(['Setting a timer']);
const Stack=createStackNavigator()

export default function App() {
  return (
    <Provider store= { store } >
      <PersistGate persistor= { persistor } loading={ null } >
          <Navigation/>
      </PersistGate>
    </Provider>
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
