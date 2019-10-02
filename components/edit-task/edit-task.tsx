import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

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
        <View style={styles.container}>
          <View style={styles.wrapper} onTouchStart={this.props.onClose} >
            <Text>test</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'  
  },
  wrapper: {
    backgroundColor: '#efebfb',
    height: 80
  }
});
