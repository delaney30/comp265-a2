import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Switch, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newCalories, setNewCalories] = useState('');
  const [selectedWorkoutType, setSelectedWorkoutType] = useState('Cardio');

  useEffect(() => {
    loadWorkouts();
  }, []);

  useEffect(() => {
    saveWorkouts();
  }, [workouts]);

  const saveWorkouts = async () => {
    try {
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    } catch (error) {
      console.log('Error saving workouts:', error);
    }
  };

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      if (storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      }
    } catch (error) {
      console.log('Error loading workouts:', error);
    }
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const handleSubmit = () => {
    if (!newWorkout.trim() || !newTime.trim() || !newCalories.trim()) return;

    setWorkouts([...workouts, {
      id: Date.now(),
      text: newWorkout,
      type: selectedWorkoutType,
      time: newTime,
      calories: newCalories,
      completed: false,
      date: null,
    }]);

    setNewWorkout('');
    setNewTime('');
    setNewCalories('');
  };

  const handleToggleCompleted = (id) => {
    setWorkouts(
      workouts.map((workout) =>
        workout.id === id
          ? { ...workout, completed: !workout.completed, date: !workout.completed ? new Date().toLocaleDateString() : null }
          : workout
      )
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inputContainer}>
            <TextInput value={newWorkout} onChangeText={setNewWorkout} placeholder="Enter Workout Exercise" style={styles.input} />
            <TextInput value={newTime} onChangeText={setNewTime} placeholder="Enter Duration (e.g., 60 mins)" style={styles.input} keyboardType="numeric" />
            <TextInput value={newCalories} onChangeText={setNewCalories} placeholder="Enter Calories Burned" style={styles.input} keyboardType="numeric" />

            <Picker selectedValue={selectedWorkoutType} onValueChange={setSelectedWorkoutType} style={styles.picker}>
              <Picker.Item label="Cardio" value="Cardio" />
              <Picker.Item label="HIIT" value="HIIT" />
              <Picker.Item label="Strength" value="Strength" />
            </Picker>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Add Workout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.header}>Workouts</Text>
            {workouts.length === 0 && <Text style={styles.emptyText}>No workouts added yet.</Text>}

            {workouts.map((workout) => (
              <View style={styles.workoutContainer} key={workout.id}>
                <View style={styles.workoutDetails}>
                  <Text style={[styles.workoutText, workout.completed && styles.completedText]}>
                    {workout.text} ({workout.type}) - {workout.time} mins - {workout.calories} cal
                  </Text>
                  {workout.completed && <Text style={styles.dateText}>Completed on: {workout.date}</Text>}
                </View>
                <Switch value={workout.completed} onValueChange={() => handleToggleCompleted(workout.id)} thumbColor={workout.completed ? 'green' : '#8E8982'} />
                <TouchableOpacity onPress={() => handleDeleteWorkout(workout.id)}>
                  <Icon name="delete" size={29} color="#536878" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 80,
  },
  header: {
    color: '#070B47',
    fontSize: 20,
    textDecorationLine:'underline',
    textAlign: 'center',
    paddingBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 1,
    borderColor: '#070B47',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#070B47',
    color: '#F5F5F5',
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 20,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 50,
  },
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  workoutDetails: {
    flex: 1,
  },
  workoutText: {
    fontSize: 16,
    color: '#536878',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
});
