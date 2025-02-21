import { useTask } from '@/contexts/TaskContext';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {addTask} = useTask();

  const handleAddTask = () => {

    const newTask = {
      title,
      description
    }

    addTask(newTask)

    // Aquí puedes guardar la tarea (usando una API, AsyncStorage, etc.)
    console.log('Tarea agregada:', { title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        onChangeText={setDescription}
        value={description}
      />
      <Button title="Agregar tarea" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddTaskScreen;