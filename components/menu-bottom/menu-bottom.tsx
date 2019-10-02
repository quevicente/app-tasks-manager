import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export class MenuBottom extends Component<any, any> {
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity>
            <Icon name='menu' color="#aaa" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.newTask} style={styles.newTask} >
            <Text style={styles.textButtonNewTask}> Nova Tarefa </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='more-vert' color="#aaa" />
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fffd',
    borderTopWidth: 1,
    borderTopColor: '#feee'
  },
  newTask: { 
    width: 200,
    height: 60,
    marginTop: -30, 
    backgroundColor: '#5e8ded',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonNewTask: { 
    color: '#ffff'
  }
});
