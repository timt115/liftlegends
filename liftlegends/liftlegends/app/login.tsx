import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LoginScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <ThemedText type="title" style={styles.title}>Login</ThemedText>
      <TextInput
        style={[styles.input, { borderColor: Colors[colorScheme].text }]}
        placeholder="Email"
        placeholderTextColor={Colors[colorScheme].text}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { borderColor: Colors[colorScheme].text }]}
        placeholder="Password"
        placeholderTextColor={Colors[colorScheme].text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color={Colors[colorScheme].button} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});