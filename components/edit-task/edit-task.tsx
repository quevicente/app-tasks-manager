import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import { Input } from 'react-native-elements'

type Props = {
  visible: boolean
  onClose: Function
}

export class EditTask extends Component<any, Props> {
  render() {
    return (
      <Modal 
        transparent
        animationType='slide'
        visible={this.props.visible}
        onRequestClose={this.props.onClose}
      >
        <View style={styles.container} >
          <View style={styles.body} onTouchStart={this.props.onClose}></View>
          <View style={styles.wrapper}>
            <Input
              placeholder='Nova Tarefa...'
              inputStyle={styles.inputStyle}
              multiline
              autoFocus
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor:'rgba(0,0,0,0.4)'
      
  },
  body:{
    width:'100%',
    height: '100%',
    
  },
  wrapper: {
    backgroundColor: '#efebfb',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 'auto'
  },
  inputStyle:{
  }
});
