import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export class MenuBottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.moreDetails}>
          <Icon name='menu' color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.newTask} style={styles.newTask} >
          <Icon name='add' color='white' size={34} style={styles.iconButton} />
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
    borderTopColor: '#feee',
    marginLeft: 8,
    marginRight: 8
  },
  newTask: {
    width: 60,
    height: 60,
    marginTop: -60,
    backgroundColor: '#5e8ded',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  iconButton: {
    color: '#ffff'
  }
});
