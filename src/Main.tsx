import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Header, Left, Body, Title, Right } from 'native-base';
import FirstView from './views/First';
import SecondView from './views/Second';
import DefaultView from './views/Default';
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

        <Header>
          <Left/>
            <Body>
              <Title>Witaj w Recallnote! <Text style={styles.helloTextRed}>♥</Text></Title>
            </Body>
          <Right />
        </Header>

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

/**
 * Styles for the Main Component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  helloTextRed: {
    color: 'red',
  },
});
