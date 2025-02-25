import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    <ThemedView style={[styles.container, { backgroundColor: theme['color-basic-100'] }]}>
      <ThemedView style={[styles.titleContainer, { backgroundColor: theme['color-primary-500'] }]}>
      <ThemedText type="title" style={[styles.title, { color: theme['color-basic-100'] }]}>Stats</ThemedText>
      </ThemedView>
      <ThemedView style={[styles.overallCard, { backgroundColor: theme['color-primary-500'] }]}>
        <ThemedText style={[styles.cardTitle, { color: theme['color-basic-100'] }]}>Overview</ThemedText>
        <View style={styles.overallContent}>
        <ThemedText style={[styles.overallText, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.overallText, { color: theme['color-basic-100'] }]}>RANK</ThemedText>
        </View>
      </ThemedView>
      <View style={{ height: 30 }} />
      <ThemedView style={[styles.statContainer, { backgroundColor: theme['color-primary-500'] }]}>
        <ThemedText style={[styles.cardTitle, { color: theme['color-primary-0'] }]}>Muscle Groups</ThemedText>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="chest" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Chest</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="back" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Back</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="biceps" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Biceps</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="triceps" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Triceps</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="legs" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Legs</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      <View style={styles.statItem}>
        <View style={styles.statName}>
        <IconSymbol name="shoulders" size={24} color={theme['color-primary-500']} />
        <ThemedText style={[styles.statText, { color: theme['color-primary-700'] }]}>Shoulders</ThemedText>
        </View>
        <View style={styles.statDetails}>
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        <ProgressBarStat />
        <ThemedText style={[styles.statValue, { color: theme['color-primary-700'] }]}>RANK</ThemedText>
        </View>
      </View>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    padding: 16,
    fontWeight: 'bold',
    color: customTheme['color-primary-100'],
  },
  statContainer: {
    padding: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 8,
    backgroundColor: customTheme['color-primary-100'],
    borderRadius: 8,
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
    color: customTheme['color-primary-500'],
  },
  statValue: {
    fontSize: 18,
    color: customTheme['color-primary-500'],
  },
  progressBar: {
    width: 100, // Adjust the width as needed
    marginHorizontal: 20,
    color: customTheme['color-primary-500'],
  },
  overallCard: {
    marginTop: 16,
    padding: 16,
    backgroundColor: customTheme['color-primary-100'],
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    color: customTheme['color-primary-500'],
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
    color: customTheme['color-primary-500'],
  },
});