import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  StatusBar,
} from 'react-native';

import ListItem from './ListItem';
import { tasks } from './mock'

export const TaskView = ({
  data
}) => {  
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        John's Tasks
      </Text>
      <FlatList 
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ListItem
            {...item}
          />
        )}
      />
    </View>
  )
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
