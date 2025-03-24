import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { supabase } from '../../../utils/supabase'; // Adjust the relative path if needed
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs

export default function Modal() {
  const [workouts, setWorkouts] = useState([
    { id: uuidv4(), name: 'Workout 1', sets: [{ id: uuidv4(), weight: '', reps: '' }] },
  ]);

  // Add a new set to a workout
  const addSet = (workoutId: string) => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.map(workout =>
        workout.id === workoutId
          ? { ...workout, sets: [...workout.sets, { id: uuidv4(), weight: '', reps: '' }] }
          : workout
      )
    );
  };

  // Update a specific set's field (weight or reps)
  const updateSet = (workoutId: string, setId: string, field: 'weight' | 'reps', value: string) => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.map(workout =>
        workout.id === workoutId
          ? {
              ...workout,
              sets: workout.sets.map(set =>
                set.id === setId ? { ...set, [field]: value } : set
              ),
            }
          : workout
      )
    );
  };

  // Save workouts to the database
  const saveWorkouts = async () => {
    try {
      const { data: session, error } = await supabase.auth.getSession();
      if (error || !session?.session) {
        Alert.alert('Error', 'You must be logged in to save workouts.');
        return;
      }
  
      const userId = session.session.user.id;
  
      // Insert workouts into the `workouts` table
      const workoutsToInsert = workouts.map(workout => ({
        id: workout.id, // UUID for the workout
        user_id: userId, // Assuming the `workouts` table has a `user_id` column
        workout_name: workout.name, // Name of the workout
      }));
  
      const { error: workoutInsertError } = await supabase.from('workouts').insert(workoutsToInsert);
      if (workoutInsertError) throw workoutInsertError;
  
      // Insert sets into the `sets` table
      const setsToInsert = workouts.flatMap(workout =>
        workout.sets.map(set => ({
          sid: uuidv4(), // Generate a unique ID for each set
          id: userId, // User ID
          workout_id: workout.id, // Workout ID (UUID)
          weight: set.weight,
          reps: set.reps,
        }))
      );
  
      console.log('Sets being sent:', setsToInsert); // Debugging
  
      const { error: setsInsertError } = await supabase.from('sets').insert(setsToInsert);
      if (setsInsertError) throw setsInsertError;
  
      Alert.alert('Success', 'Workouts and sets saved successfully!');
    } catch (error) {
      console.error('Error in saveWorkouts:', error); // Debugging
      Alert.alert('Error', `Failed to save workouts: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      {workouts.map(workout => (
        <View key={workout.id} style={styles.workoutContainer}>
          <TextInput
            placeholder="Workout Name"
            style={styles.input}
            value={workout.name}
            onChangeText={text =>
              setWorkouts(prevWorkouts =>
                prevWorkouts.map(w =>
                  w.id === workout.id ? { ...w, name: text } : w
                )
              )
            }
          />
          {workout.sets.map(set => (
            <View key={set.id} style={styles.setContainer}>
              <TextInput
                placeholder="Weight"
                style={styles.input}
                value={set.weight}
                onChangeText={text => updateSet(workout.id, set.id, 'weight', text)}
              />
              <TextInput
                placeholder="Reps"
                style={styles.input}
                value={set.reps}
                onChangeText={text => updateSet(workout.id, set.id, 'reps', text)}
              />
            </View>
          ))}
          <Button title="Add Set" onPress={() => addSet(workout.id)} />
        </View>
      ))}
      <Button title="Save Workouts" onPress={saveWorkouts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  workoutContainer: {
    marginBottom: 20,
  },
  workoutTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  setContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
});