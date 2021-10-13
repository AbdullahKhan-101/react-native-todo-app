import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './src/components/Task';
import Navigation from './src/config/Navigation';

const App = () => {
  const [task, setTask] = useState();
  const [items, setItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setItems([...items, task]);
    setTask('');
  };

  const finish = ind => {
    let newItem = [...items];
    newItem.splice(ind, 1);
    setItems(newItem);
  };

  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style={styles.tasksWraper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where tha tasks will go */}

          {items.map((elem, ind) => {
            return (
              <TouchableOpacity key={ind} onPress={() => finish(ind)}>
                <Task text={elem} />
              </TouchableOpacity>
            );
          })}
          {/* <Task text={'Task 2'} />
          <Task text={'Task 3'} /> */}
          {/* <Task text={'Task 2'} /> */}
        </View>
      </View>

      {/* Write a task */}

      <KeyboardAvoidingView
        // behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          value={task}
          style={styles.input}
          onChangeText={text => setTask(text)}
          placeholder={'Write a task'}
        />

        <TouchableOpacity onPress={() => handleAddTask()} activeOpacity={0.6}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  tasksWraper: {
    paddingTop: 32,
    paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  items: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#fff',
    width: '65%',
    borderRadius: 30,
    padding: 12,
    fontSize: 18,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingHorizontal: 22,
  },
  addWrapper: {
    backgroundColor: '#fff',
    padding: 1,
    borderRadius: 60,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
