import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import React from 'react';
import { IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components';

export default function Modal() {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000040',
      }}
    >
      {/* Dismiss modal when pressing outside */}
      <Link href={'/'} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: '90%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
        <TextInput>
        </TextInput>
        <Link href="workout">
          <Text>← Go back</Text>
        </Link>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Workout Log</Text>
        <View style={{ flexDirection: 'row' }}>  
          <TextInput
            placeholder="Enter workout details"
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '60%',
              marginTop: 10,
              paddingLeft: 10,
            }}
          />
          <SelectDisplayValueShowcase />
        </View>
        
        <Pressable
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: '#2196F3',
            borderRadius: 5,
          }}
          onPress={() => {
            // Handle save workout log
          }}
        >
          <Text style={{ color: 'white' }}>Save Workout</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const data = [
  'Dumbell Bicep Curls',
  'Dumbell Hammer Curls',
  'Preacher Curls',
  'Barbell Curls',
  'Concentration Curls',
  'EZ Bar Curls',
  'Cable Curls',
];



export const SelectDisplayValueShowcase = (): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(new IndexPath(0));
  const [multiSelectedIndex, setMultiSelectedIndex] = React.useState<IndexPath[]>([
    new IndexPath(0, 0),
    new IndexPath(1, 1),
  ]);

  const displayValue = data[selectedIndex.row];
 

  const renderOption = (title): React.ReactElement => (
    <SelectItem title={title} />
  );

  const renderGroup = (title): React.ReactElement => (
    <SelectGroup title={title}>
      {groupedData[title].map(renderOption)}
    </SelectGroup>
  );

  return (
    <Layout
      style={styles.container}
      level='1'
    >
      <Select
        style={styles.select}
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index: IndexPath) => setSelectedIndex(index)}
      >
        {data.map(renderOption)}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  select: {
    
  },
  
});

