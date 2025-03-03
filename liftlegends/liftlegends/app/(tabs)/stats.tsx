import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useTheme, ProgressBar } from '@ui-kitten/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useProgress } from '@/hooks/useProgress';
import { myTheme as customTheme } from '../custom-theme'; // <-- Import app theme

export const ProgressBarStat = (): React.ReactElement => {
  const progress = useProgress();
  return (
    <ProgressBar style={styles.progressBar} progress={progress} size='small' />
  );
};

export default function StatsTab() {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={[styles.container, { backgroundColor: theme['color-basic-100'] }]}>
        <ThemedView style={[styles.titleContainer, { backgroundColor: theme['color-primary-400'] }]}>
          <ThemedText type="title" style={[styles.title, { color: theme['color-basic-100'] }]}>Stats</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.overallCard, { backgroundColor: theme['color-primary-400'] }]}>
          <ThemedText style={[styles.cardTitle, { color: theme['color-basic-100'] }]}>Overview</ThemedText>
          <View style={styles.overallContent}>
            <ThemedText style={[styles.overallText, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
            <ProgressBarStat />
            <ThemedText style={[styles.overallText, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
          </View>
        </ThemedView>
        <View style={{ height: 30 }} />
        <ThemedView style={[styles.statContainer, { backgroundColor: theme['color-primary-400'] }]}>
          <ThemedText style={[styles.cardTitle, { color: theme['color-basic-100'] }]}>Muscle Groups</ThemedText>
          {['Chest', 'Back', 'Biceps', 'Triceps', 'Legs', 'Shoulders'].map((muscleGroup, index) => (
            <View key={index} style={styles.statItem}>
              <View style={styles.statName}>
                <IconSymbol name={muscleGroup.toLowerCase()} size={24} color={theme['color-basic-100']} />
                <ThemedText style={[styles.statText, { color: theme['color-basic-100'] }]}>{muscleGroup}</ThemedText>
              </View>
              <View style={styles.statDetails}>
                <ThemedText style={[styles.statValue, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
                <ProgressBarStat />
                <ThemedText style={[styles.statValue, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
              </View>
            </View>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  statContainer: {
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 16,
    backgroundColor: customTheme['color-primary-100'],
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 18,
    marginLeft: 8,
  },
  statValue: {
    fontSize: 18,
  },
  progressBar: {
    width: 100, // Adjust the width as needed
    marginHorizontal: 20,
  },
  overallCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  overallContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overallText: {
    fontSize: 18,
  },
});