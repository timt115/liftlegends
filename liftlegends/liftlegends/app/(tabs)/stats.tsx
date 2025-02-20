import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, ProgressBar } from '@ui-kitten/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useProgress } from '@/hooks/useProgress';
import { myTheme as customTheme } from '../custom-theme'; // <-- Import app theme

export const ProgressBarTheming = (): React.ReactElement => {
  const progress = useProgress();
  return (
    <ProgressBar style={styles.progressBar} progress={progress} />
  );
};

export default function StatsTab() {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme['color-primary-500'] }]}>
      <ThemedView style={[styles.titleContainer, { backgroundColor: theme['color-primary-400'] }]}>
        <ThemedText type="title" style={styles.title}>Stats</ThemedText>
      </ThemedView>
      <ThemedView style={[styles.statContainer, { backgroundColor: theme['color-primary-400'] }]}>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="chest" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Chest</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="back" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Back</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="biceps" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Biceps</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="triceps" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Triceps</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="legs" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Legs</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statName}>
            <IconSymbol name="shoulders" size={24} color={theme['color-primary-100']} />
            <ThemedText style={styles.statText}>Shoulders</ThemedText>
          </View>
          <View style={styles.statDetails}>
            <ThemedText style={styles.statValue}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.statValue}>RANK</ThemedText>
          </View>
        </View>
        <View style={styles.overallCard}>
          <ThemedText style={styles.cardTitle}>Overview</ThemedText>
          <View style={styles.overallContent}>
            <ThemedText style={styles.overallText}>RANK</ThemedText>
            <ProgressBarTheming />
            <ThemedText style={styles.overallText}>RANK</ThemedText>
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
    marginHorizontal: 8,
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