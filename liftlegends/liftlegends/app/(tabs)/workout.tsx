import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';

const workouts = [
  { id: '1', name: 'Chest Workout', description: 'Bench press, push-ups, and more.' },
  { id: '2', name: 'Leg Workout', description: 'Squats, lunges, and more.' },
  { id: '3', name: 'Back Workout', description: 'Pull-ups, rows, and more.' },
];

const previousWorkouts = [
  { id: '1', name: 'Chest Workout', date: '2025-03-01' },
  { id: '2', name: 'Leg Workout', date: '2025-02-28' },
  { id: '3', name: 'Back Workout', date: '2025-02-27' },
];

const WorkoutItem = ({ item }) => (
  <TouchableOpacity style={styles.workoutItem}>
    <ThemedText style={styles.workoutName}>{item.name}</ThemedText>
    <ThemedText style={styles.workoutDescription}>{item.description}</ThemedText>
  </TouchableOpacity>
);

const PreviousWorkoutItem = ({ item }) => (
  <View style={styles.previousWorkoutItem}>
    <View style={styles.timelineDot} />
    <View style={styles.timelineContent}>
      <ThemedText style={styles.previousWorkoutName}>{item.name}</ThemedText>
      <ThemedText style={styles.previousWorkoutDate}>{item.date}</ThemedText>
    </View>
  </View>
);

export default function WorkoutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Workout</ThemedText>
      </ThemedView>
      <Link href="/(tabs)/(workouts)/modal" style={styles.addButton}>
        <IconSymbol name="plus-circle" size={24} color="#fff" />
        <ThemedText style={styles.addButtonText}>Add Workout</ThemedText>
      </Link>
      <ThemedView style={styles.previousWorkoutsContainer}>
        <ThemedText type="title" style={styles.previousWorkoutsTitle}>Previous Workouts</ThemedText>
        <FlatList
          data={previousWorkouts}
          renderItem={({ item }) => <PreviousWorkoutItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.previousWorkoutsList}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '4%',
  },
  workoutList: {
    paddingBottom: '4%',
  },
  workoutItem: {
    padding: '4%',
    marginBottom: '4%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
    backgroundColor: '#6200ee',
    borderRadius: 8,
    marginTop: '4%',
  },
  addButtonText: {
    color: '#fff',
    marginLeft: '2%',
  },
  previousWorkoutsContainer: {
    marginTop: '8%',
  },
  previousWorkoutsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '4%',
  },
  previousWorkoutsList: {
    paddingBottom: '4%',
  },
  previousWorkoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6200ee',
    marginRight: '4%',
  },
  timelineContent: {
    flex: 1,
    padding: '4%',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  previousWorkoutName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  previousWorkoutDate: {
    fontSize: 14,
    color: '#888',
  },
});