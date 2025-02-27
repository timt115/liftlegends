import React from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { Avatar } from '@ui-kitten/components';

import { HapticTab } from '@/components/HapticTab'; // Import Header component
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { myTheme as customTheme } from '../custom-theme'; // <-- Import app theme
import { useSession } from '@/hooks/ctx'; // Adjust the import path as needed

export const AvatarSimpleUsageShowcase = (): React.ReactElement => (
  <Avatar source={require('@/assets/images/icon.png')} size='tiny' style={styles.avatar} />
);

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading, signIn, signOut } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={[styles.container, { backgroundColor: customTheme['color-primary-100'] }]}>
      <View style={styles.headerContainer}>
        <ThemedText type="title" style={styles.title}>
          <AvatarSimpleUsageShowcase />
          Player
          Level
          Rank
          <Button title="Sign Out" onPress={signOut} style={styles.signout} />
        </ThemedText>
        
      </View>
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="stats"
          options={{
            title: 'Stats',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="barchart.fill" color={"gray"} />,
          }}
        />
        <Tabs.Screen
          name="workout"
          options={{
            title: 'Workout',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={"gray"} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={"gray"} />,
          }}
        />
        <Tabs.Screen name="(workouts)/modal" options={{ tabBarItemStyle: { display: 'none' } }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: customTheme['color-primary-900'], // Use the custom theme color
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: customTheme['color-primary-100'], // Use the custom theme color
    marginLeft: 20,
  },
  avatar: {
    marginRight: 10,
  },
  signout: {
    backgroundColor: customTheme['color-primary-500'], // Use the custom theme colorz 
    borderRadius: 5,
    marginRight: 20,
  },
});