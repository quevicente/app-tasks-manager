import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { MenuBottom, NewTask, ModalDetails } from '../components';

import { TaskView } from './task/task.view';

//api
import { getTasks, createTask, updateTask, removeTask } from '../services';

export class Main extends Component {
  state = {
    tasks: [],
    completedTasks: [],
    modalVisible: false,
    modalDetailsVisible: false,
  }

  componentDidMount() {
    this.loadTasks();
  }

  //open/close modal new task
  handleOpenModal = () => this.setState({ modalVisible: true });
  handleCloseModal = () => this.setState({ modalVisible: false });

  //open/close modal modalDetails
  handleOpenModalDetails = () => this.setState({ modalDetailsVisible: true });
  handleCloseModalDetails = () => this.setState({ modalDetailsVisible: false });
  //completed tasks
  handleCompletedTask = idTask => {
    let taskUpdate;

    this.setState({ 
      tasks: this.state.tasks.filter(task => {
        if(task._id === idTask){
          taskUpdate = {
            ...task,
            status: 'concluido',
          };

          return null;
        }else{
          return task
        }
      }),
      completedTasks: [ ...this.state.completedTasks, taskUpdate ],
    });

    updateTask(idTask, taskUpdate);
  }

  handleDeleteTask = idTask => {
    this.setState({
      completedTasks: this.state.completedTasks.filter(task => task._id === idTask ?  null : task),
    });

    removeTask(idTask);
  }

  //new tasks
  handleSaveTask = async task =>{
    const newTask = {
      ...task,
      status: 'aberto'
    }

    this.setState({tasks:[...this.state.tasks, newTask]})
    this.handleCloseModal();

    await createTask(newTask);
  }

  loadTasks = async () => { 
    const { data } = await getTasks();

    const tasks =  [...data.filter(task => {
      if(task.nome !== undefined && task.descricao !== undefined){
        return{
          id: task._id,
          nome: task.nome,
          descricao: task.descricao,
          status: 'aberto',
        }
      }
    })];

    this.setState({ 
      tasks: tasks.filter(task => task.status === 'aberto' ? task : null),
      completedTasks: tasks.filter(task => task.status !== 'aberto' ? task : null),
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TaskView title="John's Tasks" data={this.state.tasks} handleSwipe={this.handleCompletedTask}/>
        <TaskView title="Concluídas" data={this.state.completedTasks} handleSwipe={this.handleDeleteTask}/>
  
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