import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import { supabase } from '../../../utils/supabase';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library for generating unique IDs


// Adjust the relative path if needed
export default function Modal() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Workout 1', sets: [{ id: 1, exerise_id: '', weight: '', reps: '' }] },
  ]);

  // Helper function to update workouts state
  const updateWorkouts = (workoutId, updater) => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.map(workout =>
        workout.id === workoutId ? updater(workout) : workout
      )
    );
  };

  // Add a new set to a workout
  const addSet = workoutId => {
    updateWorkouts(workoutId, workout => ({
      ...workout,
      sets: [...workout.sets, { id: Date.now(), exerise_id: '', weight: '', reps: '' }],
    }));
  };

  // Update a specific set's field (weight or reps)
  const updateSet = (workoutId, setId, field, value) => {
    updateWorkouts(workoutId, workout => ({
      ...workout,
      sets: workout.sets.map(set =>
        set.id === setId ? { ...set, [field]: value } : set
      ),
    }));
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
      const workout_id = uuidv4();
  
      // Generate unique IDs for workouts and prepare data for insertion
      const workoutsToInsert = workouts.map(workout => ({
        workout_id: workout_id, 
        user_id: userId,
        workout_name: workout.name,
      }));
  
      // Insert workouts into the database
      const { error: workoutInsertError } = await supabase.from('workouts').insert(workoutsToInsert);
      if (workoutInsertError) throw workoutInsertError;
  
      // Prepare sets to insert with the correct workout IDs
      const setsToInsert = workouts.flatMap(workout =>
        workout.sets.map(({ weight, reps }) => ({
          user_id: userId,
          workout_id: workout_id,
          weight,
          reps,
        }))
      );
  
      // Insert sets into the database
      const { error: setsInsertError } = await supabase.from('sets').insert(setsToInsert);
      if (setsInsertError) throw setsInsertError;
  
      Alert.alert('Success', 'Workouts and sets saved successfully!');
    } catch (error) {
      console.error('Error in saveWorkouts:', error);
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
              updateWorkouts(workout.id, workout => ({ ...workout, name: text }))
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