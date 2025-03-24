import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, useTheme } from '@ui-kitten/components';
import { Link, Slot } from 'expo-router';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { myTheme as theme } from './custom-theme'; 
import { StatusBar, View, StyleSheet } from 'react-native';

export default () => (
  
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Layout style={{ flex: 1, backgroundColor: theme['color-primary-500'] }}>
            <Slot />
          </Layout>
        </View>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Ensure content does not overlap the status bar
  },
});