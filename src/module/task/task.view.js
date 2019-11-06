import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  StatusBar,
} from 'react-native';

import ListItem from './components/ListItem'

export class TaskView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
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
          keyExtractor={(item) => item._id}
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