import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  StatusBar,
} from 'react-native';

import { ListTask } from '../../components'

import ListItem from './components/ListItem'
import { tasks } from './mock'

export class TaskView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          John's Tasks
        </Text>
        <FlatList 
          data={this.props.data}
          renderItem={({ item }, index) =>
            <ListItem
              key={index}
              data={item}
              onSwipeFromLeft= {() => this.props.handleSwipe(item._id)}
            />
          }
          keyExtractor={(item) => item.nome}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 16
  },
  title: { 
    textAlign: 'center', 
    fontSize: 28
  }
});