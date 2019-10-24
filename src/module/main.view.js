import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { MenuBottom, NewTask, ModalDetails } from '../components'

import { TaskView } from './task/task.view';

export class Main extends Component {
  state = {
    tasks: [],
    modalVisible: false,
    modalDetailsVisible: false,
  }

  //open/close modal new task
  handleOpenModal = () => this.setState({ modalVisible: true })
  handleCloseModal = () => this.setState({ modalVisible: false })

  //open/close modal modalDetails
  handleOpenModalDetails = () => this.setState({ modalDetailsVisible: true })
  handleCloseModalDetails = () => this.setState({ modalDetailsVisible: false })

  //new tasks
  handleSaveTask = task => this.setState({tasks:[...this.state.tasks, task] })


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TaskView data={this.state.tasks} />
  
        <NewTask
          visible={this.state.modalVisible}
          onClose={this.handleCloseModal}
          onSave = { this.handleSaveTask }
        />
  
        <ModalDetails
          visible={this.state.modalDetailsVisible}
          onClose={this.handleCloseModalDetails}
        />
  
        <MenuBottom newTask={this.handleOpenModal} moreDetails={this.handleOpenModalDetails} />
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
