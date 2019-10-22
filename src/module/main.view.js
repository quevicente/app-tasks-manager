import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';

import { MenuBottom, EditTask, ModalDetails } from '../components'

import { TaskView } from './task/task.view';

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetailsVisible, setModaDetailslVisible] = useState(false);

  //open/close modal new task
  const handleOpenModal = () => setModalVisible(true)
  const handleCloseModal = () => setModalVisible(false)

  //open/close modal modalDetails
  const handleOpenModalDetails = () => setModaDetailslVisible(true)
  const handleCloseModalDetails = () => setModaDetailslVisible(false)

  return (
    <SafeAreaView style={styles.container}>
      <TaskView data={tasks} />

      <EditTask
        visible={modalVisible}
        onClose={handleCloseModal}
      />

      <ModalDetails
        visible={modalDetailsVisible}
        onClose={handleCloseModalDetails}
      />

      <MenuBottom newTask={handleOpenModal} moreDetails={handleOpenModalDetails} />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});