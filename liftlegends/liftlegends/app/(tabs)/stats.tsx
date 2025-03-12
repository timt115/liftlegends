import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { useTheme, ProgressBar } from '@ui-kitten/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useProgress } from '@/hooks/useProgress';
import { myTheme as customTheme } from '../custom-theme'; // <-- Import app theme

// Import images
const rankImages = {
  rank1: require('@/assets/images/bronze.png'),
  rank2: require('@/assets/images/silver.png'),
  rank3: require('@/assets/images/gold.png'),
  rank4: require('@/assets/images/plat.png'),
  rank5: require('@/assets/images/diamond.png'),
};

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
            <Image source={rankImages.rank1} style={styles.rankImage} />
            <ProgressBarStat />
            <Image source={rankImages.rank2} style={styles.rankImage} />
          </View>
        </ThemedView>
        <View style={{ height: 30 }} />
        <ThemedView style={[styles.statContainer, { backgroundColor: theme['color-primary-400'] }]}>
          <ThemedText style={[styles.cardTitle, { color: theme['color-basic-100'] }]}>Muscle Groups</ThemedText>
          {['Chest', 'Back', 'Biceps', 'Triceps', 'Legs', 'Shoulders'].map((muscleGroup, index) => (
            <View key={index} style={styles.statItem}>
              <View style={styles.statName}>
                <Image source={rankImages[`rank${index + 1}`]} style={styles.rankImage} />
                <ThemedText style={[styles.statText, { color: theme['color-basic-100'] }]}>{muscleGroup}</ThemedText>
              </View>
              <View style={styles.statDetails}>
                <Image source={rankImages[`rank${index + 1}`]} style={styles.rankstatImage} />
                <ProgressBarStat />
                <Image source={rankImages[`rank${index + 2}`]} style={styles.rankstatImage} />
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
    padding: '4%',
  },
  container: {
    flex: 1,
    padding: '4%',
    borderRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    padding: '4%',
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
    padding: '4%',
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
    marginBottom: '4%',
    padding: '4%',
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
    flex: 1,
  },
  statDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  rankstatImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  statText: {
    fontSize: 18,
    marginLeft: '2%',
  },
  statValue: {
    fontSize: 18,
  },
  progressBar: {
    width: '40%', // Adjust the width as needed
    marginHorizontal: '5%',
  },
  overallCard: {
    marginTop: '4%',
    padding: '4%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: '2%',
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
  rankImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});