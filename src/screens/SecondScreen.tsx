import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';

export default class Default extends React.Component {
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
          <Text>
            This is Second screen
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

/**
 * Styles
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