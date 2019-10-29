import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-gesture-handler/Swipeable';
//import { GestureHandler } from 'expo';
//const { Swipeable } = GestureHandler;

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.leftAction}>
      <Animated.Text style={styles.actionText}>
         tarefa removida!
      </Animated.Text>
    </View>
  );
};

const ListItem = ({ data, onSwipeFromLeft, onRightPress }) =>{

  const [checked, setChecked] = useState(false)
  
  const handleChecked = () => setChecked(!checked)

  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={onSwipeFromLeft}
    >
      <View>
        <TouchableOpacity onPress={handleChecked} style={styles.listItem} >
          <CheckBox
            checkedIcon='check'
            uncheckedIcon='circle-o'
            checked={checked}
            />
          <Text>{data.nome}</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container}>
        <Text style={styles.text}>{data.nome}</Text>
      </View> */}
    </Swipeable>
  );

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ListItem;