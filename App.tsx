import React from 'react';
import { ScreenOrientation } from 'expo';
import Main from './src/Main';

/**
 * Allow ALL Screen Orientations
 */
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);

/**
 * Render the main component of application
 */
export default class App extends React.Component {
  render () {
    return (
      <Main />
    );
  }
}