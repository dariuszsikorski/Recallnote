import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Container, Header, Content, List, ListItem, Button, Left, Body, Right, Title, Icon } from 'native-base';

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
      <Container style={styles.container}>

        <Header>
          <Left/>
          <Body>
            <Title>Witaj w Recallnote! <Text style={styles.helloTextRed}>♥</Text></Title>
          </Body>
          <Right />
        </Header>

        <Content>
        
          <List>
            <ListItem>
              <Text>Task 1</Text>
            </ListItem>
            <ListItem>
              <Text>Task 2</Text>
            </ListItem>
            <ListItem>
              <Text>Task 3</Text>
            </ListItem>
          </List>

          <Button rounded block style={styles.baseButton}>
            <Text style={styles.baseButtonText}>
              <Icon name='add' style={{ fontSize: 40 }} />
            </Text>
          </Button>

        </Content>
      </Container>
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
  helloTextRed: {
    color: 'red',
  },
  baseButtonText: {
    color: '#fff',
  },
  baseButton: {
    width: 50,
    height: 50,
    fontSize: 100,
    backgroundColor: '#00c853',
  },
});
