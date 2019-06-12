import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import FirstView from './screens/FirstScreen';
import SecondView from './screens/SecondScreen';
import DefaultView from './screens/DefaultScreen';
import initializeApp from './init';

/**
 * Initialize App
 */
initializeApp();

/**
 * Define and render Root Component of the App
 */
export default class App extends React.Component {

  render () {
    return (
      <NativeRouter>
        <Text> </Text>

        <Link to="/first">
          <Text>Go to first view</Text>
        </Link>

        <Link to="/second">
          <Text>Go to second view</Text>
        </Link>

        <Link to="/">
          <Text>Go to default view</Text>
        </Link>

        <Route exact path="/first" component={FirstView} />
        <Route exact path="/second" component={SecondView} />
        <Route exact path="/" component={DefaultView} />
      </NativeRouter>
    );
  }
}