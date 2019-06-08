import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenOrientation } from 'expo';
import {Button} from 'native-base';

/**
 * Allow ALL Screen Orientations
 */
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);


/**
 * Define and render Root Component of the App
 */
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloText}>Witaj w Appce <Text style={styles.helloTextRed}>Recallnote! ♥</Text></Text>
        <Button rounded block danger style={styles.baseButton}><Text style={styles.baseButtonText}>Add Note</Text></Button>
      </View>
    );
  }
}

/**
 * Styles for the Root Component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 50,
  },
  helloTextRed: {
    color: 'red',
  },
  baseButtonText: {
    color: '#fff',
  },
  baseButton: {
    maxWidth: 100,
  },
});
