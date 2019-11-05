import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { MenuBottom, NewTask, ModalDetails } from '../components'

import { TaskView } from './task/task.view';

//api
import { getTasks, createTask } from '../services'

export class Main extends Component {
  state = {
    tasks: [],
    completedTasks: [],
    modalVisible: false,
    modalDetailsVisible: false,
  }

  //open/close modal new task
  handleOpenModal = () => this.setState({ modalVisible: true })
  handleCloseModal = () => this.setState({ modalVisible: false })

  //open/close modal modalDetails
  handleOpenModalDetails = () => this.setState({ modalDetailsVisible: true })
  handleCloseModalDetails = () => this.setState({ modalDetailsVisible: false })
  //completed tasks
  handleCompletedTasks = idTask => {
    this.setState({ tasks: [
      ...this.state.tasks.map(task => {
        if(task._id === idTask){
          return {
            ...task,
            nome: ''
          };
        }else{
          return task
        }
      })
    ]})

    console.log(this.state.task)
  }

  //new tasks
  handleSaveTask = async task =>{
    this.setState({tasks:[...this.state.tasks, task]})
    this.handleCloseModal()

    createTask({
      ...task,
      status: 'aberto'
    })
  }

  render() {
    const loadTasks = async () => { 
        const { data } = await getTasks()

        const tasks =  [...data.filter(task => {
          if(task.nome !== undefined && task.descricao !== undefined){
            return{
              id: task._id,
              nome: task.nome,
              descricao: task.descricao,
              status: 'aberto',
            }
          }
        })]

        this.setState({ tasks: tasks })
    }

    loadTasks()

    return (
      <SafeAreaView style={styles.container}>
        <TaskView data={this.state.tasks} handleSwipe={this.handleCompletedTasks}/>
  
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