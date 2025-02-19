import { Image, StyleSheet, Platform, View } from 'react-native';
import React from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabOneScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Stats</ThemedText>
      </ThemedView>
      <ThemedView style={styles.statContainer}>
        <View style={styles.statItem}>
          <IconSymbol name="chest" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Chest</ThemedText>
          <ThemedText style={styles.statValue}>40 inches</ThemedText>
        </View>
        <View style={styles.statItem}>
          <IconSymbol name="back" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Back</ThemedText>
          <ThemedText style={styles.statValue}>42 inches</ThemedText>
        </View>
        <View style={styles.statItem}>
          <IconSymbol name="biceps" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Biceps</ThemedText>
          <ThemedText style={styles.statValue}>15 inches</ThemedText>
        </View>
        <View style={styles.statItem}>
          <IconSymbol name="triceps" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Triceps</ThemedText>
          <ThemedText style={styles.statValue}>14 inches</ThemedText>
        </View>
        <View style={styles.statItem}>
          <IconSymbol name="legs" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Legs</ThemedText>
          <ThemedText style={styles.statValue}>22 inches</ThemedText>
        </View>
        <View style={styles.statItem}>
          <IconSymbol name="shoulders" size={24} color={Colors[colorScheme].text} />
          <ThemedText style={styles.statText}>Shoulders</ThemedText>
          <ThemedText style={styles.statValue}>18 inches</ThemedText>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 8,
  },
  statText: {
    fontSize: 18,
    marginLeft: 8,
    color: Colors.light.text,
  },
  statValue: {
    fontSize: 18,
    color: Colors.light.text,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});