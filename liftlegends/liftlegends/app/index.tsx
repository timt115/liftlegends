import { Text, View, StyleSheet, } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';


export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text>To</Text>
      <Text style={styles.title}>Lift Legends</Text>
      <Text>  </Text>
      <Link href="/(tabs)/profile">Go to Tabs</Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
  },
});