import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme, ProgressBar } from '@ui-kitten/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useProgress } from '@/hooks/useProgress';
import { myTheme as customTheme } from '../custom-theme'; // <-- Import app theme

export const ProgressBarTheming = (): React.ReactElement => {
  const progress = useProgress();
  return (
    <ProgressBar style={styles.progressBar} progress={progress} />
  );
};

export default function ProfileTab() {
  const theme = useTheme();
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme['color-primary-400'] }]}>
      <ThemedView style={[styles.header, { backgroundColor: theme['color-primary-400'] }]}>
        <ThemedText type="title" style={styles.title}>Profile</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subtitle}>View your profile and stats.</ThemedText>
      <View style={styles.levelCard}>
        <ThemedText style={styles.cardTitle}>Level</ThemedText>
        <View style={styles.levelContent}>
          <ThemedText style={styles.levelText}>Lv1</ThemedText>
          <ProgressBarTheming />
          <ThemedText style={styles.levelText}>Lv2</ThemedText>
        </View>
      </View>
      <View style={styles.statContainer}>
        <IconSymbol name="weight" size={24} color={theme['color-primary-100']} />
        <ThemedText style={styles.statText}>Weight</ThemedText>
      </View>
      <View style={styles.statContainer}>
        <IconSymbol name="height" size={24} color={theme['color-primary-100']} />
        <ThemedText style={styles.statText}>Height</ThemedText>
      </View>
      <ThemedText style={styles.comingSoon}>Coming soon...</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '4%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: customTheme['color-primary-100'],
  },
  subtitle: {
    fontSize: 16,
    color: customTheme['color-primary-100'],
    marginBottom: '4%',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
    padding: '4%',
    backgroundColor: customTheme['color-primary-100'],
    borderRadius: 8,
  },
  statText: {
    fontSize: 18,
    marginLeft: '2%',
    color: customTheme['color-primary-500'],
  },
  levelCard: {
    marginBottom: '4%',
    padding: '4%',
    backgroundColor: customTheme['color-primary-100'],
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    color: customTheme['color-primary-500'],
    marginBottom: '2%',
    textAlign: 'center',
  },
  levelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  levelText: {
    fontSize: 18,
    color: customTheme['color-primary-500'],
  },
  progressBar: {
    flex: 1,
    marginHorizontal: '2%',
  },
  comingSoon: {
    fontSize: 16,
    color: customTheme['color-primary-100'],
    textAlign: 'center',
    marginTop: '8%',
  },
});