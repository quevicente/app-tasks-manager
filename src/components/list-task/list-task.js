import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export class ListTask extends Component {
  state = {
    checked
  }
  const [checked, setChecked] = useState(false)

  const handleChecked = () => setChecked(!checked)
  
  return (
    <TouchableOpacity onPress={handleChecked} style={styles.listItem} >
      <CheckBox
        checkedIcon='check'
        uncheckedIcon='circle-o'
        checked={checked}
      />
      <Text>{this.props.nome}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
