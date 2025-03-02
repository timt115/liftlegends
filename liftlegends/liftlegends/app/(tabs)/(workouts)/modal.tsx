import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import React, { useState } from 'react';
import { useTheme } from '@ui-kitten/components';
import DropdownComponent from '../../../components/DropdownComponent'; // Import the DropdownComponent

export default function Modal() {
  const theme = useTheme();
  const [workouts, setWorkouts] = useState([{ id: 1, sets: [{ id: 1 }], isFocus: false, value: '' }]);

  const addWorkout = () => {
    setWorkouts([...workouts, { id: workouts.length + 1, sets: [{ id: 1 }], isFocus: false, value: '' }]);
  };

  const addSet = (workoutId: number) => {
    setWorkouts(workouts.map(workout => 
      workout.id === workoutId 
        ? { ...workout, sets: [...workout.sets, { id: workout.sets.length + 1 }] }
        : workout
    ));
  };

  return (
    <Animated.View
      entering={FadeIn}
      style={styles.overlay}
    >
      {/* Dismiss modal when pressing outside */}
      <Link href={'/'} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={[styles.modal, { backgroundColor: theme['background-basic-color-1'] }]}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Link href="/workout">
            <Text style={[styles.goBack, { color: theme['color-primary-500'] }]}>← Go back</Text>
          </Link>
          <Text style={[styles.header, { color: theme['text-basic-color'] }]}>Today's Workout Log</Text>
          
          {workouts.map((workout) => (
            <View key={workout.id} style={styles.workoutContainer}>
              <Text style={[styles.workoutTitle, { color: theme['text-basic-color'] }]}>Workout {workout.id}</Text>
              <DropdownComponent
              
                value={workout.value}
                setValue={(value: any) => {
                  const updatedWorkouts = workouts.map(w => 
                    w.id === workout.id ? { ...w, value } : w
                  );
                  setWorkouts(updatedWorkouts);
                }}
                isFocus={workout.isFocus}
                setIsFocus={(isFocus: any) => {
                  const updatedWorkouts = workouts.map(w => 
                    w.id === workout.id ? { ...w, isFocus } : w
                  );
                  setWorkouts(updatedWorkouts);
                }}
              />
              {workout.sets.map((set) => (
                <View key={set.id} style={[styles.setContainer, { backgroundColor: theme['background-basic-color-2'] }]}>
                  <TextInput
                    placeholder="Weight"
                    placeholderTextColor={theme['text-hint-color']}
                    style={[styles.input, { borderColor: theme['border-basic-color-100'], color: theme['text-basic-color'] }]}
                  />
                  <TextInput
                    placeholder="Reps"
                    placeholderTextColor={theme['text-hint-color']}
                    style={[styles.input, { borderColor: theme['border-basic-color-100'], color: theme['text-basic-color'] }]}
                  />
                </View>
              ))}
              <Button title="Add Set" onPress={() => addSet(workout.id)} color={theme['color-primary-500']} />
            </View>
          ))}
          <Button title="Add Workout" onPress={addWorkout} color={theme['color-primary-500']} />
          <Pressable
            onPress={() => {
              // Handle save workout log
            }}
            style={[styles.saveButton, { backgroundColor: theme['color-primary-500'] }]}
          >
            <Text style={styles.saveButtonText}>Save Workout</Text>
          </Pressable>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  modal: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  workoutContainer: {
    marginBottom: 20,
    width: '100%',
  },
  workoutTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  setContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});