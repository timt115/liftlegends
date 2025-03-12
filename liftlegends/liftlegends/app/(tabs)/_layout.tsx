import React from 'react';
import { Platform, StyleSheet, View, Button } from 'react-native';
import { Text, Avatar, MenuItem, OverflowMenu, Layout } from '@ui-kitten/components';
import { Tabs, Redirect } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { myTheme as customTheme } from '../custom-theme';
import { useSession } from '@/hooks/ctx';

const UserAvatar = (): React.ReactElement => (
  <Avatar source={require('@/assets/images/icon.png')} size='tiny' style={styles.avatar} />
);

const CustomOverflowMenu = ({ onSignOut }): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const handleItemSelect = (index): void => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = (): React.ReactElement => (
    <Button title="Menu" onPress={() => setVisible(true)} />
  );

  return (
    <Layout style={styles.menuContainer} level='1'>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        selectedIndex={selectedIndex}
        onSelect={handleItemSelect}
        onBackdropPress={() => setVisible(false)}
      >
        <MenuItem title='Users' />
        <MenuItem title='Orders' />
        <MenuItem title='Settings' />
        <MenuItem title='Sign Out' onPress={onSignOut} />
      </OverflowMenu>
    </Layout>
  );
};

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
        <View style={styles.headerLeft}>
          <ThemedText type="title" style={styles.title}>
            <UserAvatar />
            Player Level Rank
          </ThemedText>
        </View>
        <CustomOverflowMenu onSignOut={signOut} />
      </View>
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor: 'transparent',
            },
            default: {},
          }),
        }}
      >
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
    paddingTop: '1%',
    paddingBottom: '1%',
    alignItems: 'center',
    backgroundColor: customTheme['color-primary-900'],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: customTheme['color-primary-100'],
    marginLeft: '2%',
  },
  avatar: {
    marginLeft: '1%',
    paddingRight: '5%',
  },
  menuContainer: {
    width: '15%',
    height: '100%',
  },
  headerLeft: {
    flex: 1,
  },
});