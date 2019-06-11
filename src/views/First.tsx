import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, List, ListItem, Button, Icon } from 'native-base';

/**
 * Render the component
 */
export default class First extends React.Component {
  render () {
    return (
      <Container style={styles.container}>

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
