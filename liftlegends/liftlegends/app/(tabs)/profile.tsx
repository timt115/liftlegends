import { StyleSheet, Image, Platform, View } from 'react-native';
import React from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabThreeScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Profile</ThemedText>
      </ThemedView>
      <ThemedText style={styles.subtitle}>View your profile and stats.</ThemedText>
      <View style={styles.statContainer}>
        <IconSymbol name="weight" size={24} color={Colors[colorScheme].text} />
        <ThemedText style={styles.statText}>Weight</ThemedText>
      </View>
      <View style={styles.statContainer}>
        <IconSymbol name="height" size={24} color={Colors[colorScheme].text} />
        <ThemedText style={styles.statText}>Height</ThemedText>
      </View>
      <ThemedText style={styles.comingSoon}>Coming soon...</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  comingSoon: {
    fontSize: 16,
    color: Colors.light.text,
    textAlign: 'center',
    marginTop: 32,
  },
});