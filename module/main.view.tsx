import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

import { MenuBottom, EditTask } from '../components'

import { TaskView } from './task/task.view';

export class Main extends Component<any> {
  state = {
    modalVisible: false
  }
  
  handleOpenModal = () => this.setState({ modalVisible: true })
  handleCloseModal = () => this.setState({ modalVisible: false })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TaskView/>
        <EditTask visible={this.state.modalVisible} onClose={this.handleCloseModal} />
        <MenuBottom newTask={this.handleOpenModal} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
