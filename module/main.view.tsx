import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

import { MenuBottom, EditTask } from '../components'

import { TaskView } from './task/task.view';

export class Main extends Component<any> {
  state = {
    modalVisible: true,
    //data new task
    newTask:{
      title: '',
      details: ''
    }
  }

  //open/close modal new task
  handleOpenModal = () => this.setState({ modalVisible: true })
  handleCloseModal = () => this.setState({ modalVisible: false })
  //functions new task
  handleNewTask = {
    onChangeTitle: text => {
      this.setState({ newTask: {...this.state.newTask, title: text}})
      console.log(text)
    },
    onChangeDetails: text => {
      this.setState({ newTask: {...this.state.newTask, details: text}})
      console.log(this.state.newTask)
    },
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TaskView/>
        <EditTask
          visible={this.state.modalVisible}
          onClose={this.handleCloseModal}
          //values new task
          valueTitle={this.state.newTask.title}
          valueDetails={this.state.newTask.details}
          //actions new task
          onChangeTitle={this.handleNewTask.onChangeTitle} 
          onChangeDetails={this.handleNewTask.onChangeDetails} 
        />
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
