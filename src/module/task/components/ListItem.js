import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const LeftActions = () => {
  return (
    <View style={styles.leftAction}>
      <Animated.Text style={styles.actionText}>
         Tarefa Concluída!
      </Animated.Text>
    </View>
  );
};

class ListItem extends Component{
  handleCompleted = () => {
    this.props.onSwipeFromLeft();

    return true;
  }
  render() {
    const completed = this.props.data.status !== 'aberto'
    return (
      <Swipeable renderLeftActions={LeftActions} onSwipeableLeftOpen={this.handleCompleted}>
        <View style={{ backgroundColor: '#fff'}}>
          <TouchableOpacity style={styles.listItem} >
            <CheckBox
              checkedIcon='check'
              uncheckedIcon='circle-o'
              checked={completed}
              />
            <Text style={ completed && { textDecorationLine: 'line-through' } } >{this.props.data.nome}</Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ListItem;