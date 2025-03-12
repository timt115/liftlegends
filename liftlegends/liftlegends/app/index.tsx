import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <Pressable style={styles.container} onPress={() => router.push('/(tabs)/profile')}>
      <ThemedView style={styles.container}>
        <Image source={require('@/assets/images/startscreen.jpeg')} style={styles.image} />
        <Text style={styles.title}>Welcome</Text>
        <Text>To</Text>
        <Text style={styles.title}>Lift Legends</Text>
        <Text>  </Text>
        <Text style={styles.start}>TAP anywhere to START</Text>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top
  },
  image: {
    width: '100%', // Set the width to the full width of the screen
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, // Add margin to create space between elements
  },
  start: {
    fontSize: 16,
  },
});