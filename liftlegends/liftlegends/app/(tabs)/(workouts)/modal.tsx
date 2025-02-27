import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import React, { useState } from 'react';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export default function Modal() {
  const [workouts, setWorkouts] = useState([{ id: 1, sets: [{ id: 1 }] }]);

  const addWorkout = () => {
    setWorkouts([...workouts, { id: workouts.length + 1, sets: [{ id: 1 }] }]);
  };

  const addSet = (workoutId) => {
    setWorkouts(workouts.map(workout => 
      workout.id === workoutId 
        ? { ...workout, sets: [...workout.sets, { id: workout.sets.length + 1 }] }
        : workout
    ));
  };

  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040',
      }}
    >
      {/* Dismiss modal when pressing outside */}
      <Link href={'/'} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: '90%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
        <TextInput>
        </TextInput>
        <Link href="workout">
          <Text>← Go back</Text>
        </Link>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Workout Log</Text>
        {workouts.map((workout) => (
          <View key={workout.id} style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Workout {workout.id}</Text>
            {workout.sets.map((set) => (
              <View key={set.id} style={{ flexDirection: 'row', marginBottom: 10 }}>
                <SelectDisplayValueShowcase />
                <TextInput
                  placeholder="Weight"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Reps"
                  style={styles.input}
                />
              </View>
            ))}
            <Button title="Add Set" onPress={() => addSet(workout.id)} />
          </View>
        ))}
        <Button title="Add Workout" onPress={addWorkout} />
        <Pressable
          onPress={() => {
            // Handle save workout log
          }}
          style={styles.saveButton}
        >
          <Text style={{ color: 'white' }}>Save Workout</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const data = [
  'Dumbell Bicep Curls',
  'Dumbell Hammer Curls',
  'Preacher Curls',
  'Barbell Curls',
  'Concentration Curls',
  'EZ Bar Curls',
  'Cable Curls',
];

export const SelectDisplayValueShowcase = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const renderOption = (title): React.ReactElement => (
    <SelectItem title={title} />
  );

  return (
    <Layout style={styles.container} level='1'>
      <Select
        style={styles.select}
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index: IndexPath) => setSelectedIndex(index)}
      >
        {data.map(renderOption)}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  select: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});