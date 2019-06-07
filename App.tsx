
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenOrientation } from 'expo';

/**
 * Allow ALL Screen Orientations
 */
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);


/**
 * Define and render Root Component of the App
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Witaj w Appce <Text style={styles.helloTextRed}>Recallnote! ♥</Text></Text>
    </View>
  );
}

/**
 * Styles for the Root Component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 50,
  },
  helloTextRed: {
    color: 'red',
  },
});
