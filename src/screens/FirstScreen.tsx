import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, List, ListItem } from 'native-base';

/**
 * Render the component
 */
export default class First extends React.Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
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

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

/**
 * Styles for the Root Component
 */
const styles = StyleSheet.create({
  baseButtonText: {
    color: '#fff',
  },
  baseButton: {
    width: 50,
    height: 50,
    fontSize: 100,
    backgroundColor: '#00c853',
  },
  helloTextRed: {
    color: 'red',
  },
});