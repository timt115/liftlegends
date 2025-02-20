import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, useTheme } from '@ui-kitten/components';
import { Link, Slot } from 'expo-router';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { myTheme as theme } from './custom-theme'; // <-- Import app theme

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme['color-primary-500'] }}>
      <Text category='h1' style={{ color: theme['color-primary-100'] }}>Welcome</Text>
      <Text category='s1' style={{ color: theme['color-primary-100'] }}>To</Text>
      <Text category='h1' style={{ color: theme['color-primary-100'] }}>Lift Legends</Text>
      <Link href="/(tabs)/profile" style={{ color: theme['color-primary-100'] }}>Go to Tabs</Link>
    </Layout>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Layout style={{ flex: 1, backgroundColor: theme['color-primary-500'] }}>
        <Slot />
      </Layout>
    </ApplicationProvider>
  </>
);