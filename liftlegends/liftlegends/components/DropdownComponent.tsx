import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from '@ui-kitten/components';

const data = [
  { label: 'Dumbell Bicep Curls', value: 'dumbell_bicep_curls' },
  { label: 'Dumbell Hammer Curls', value: 'dumbell_hammer_curls' },
  { label: 'Preacher Curls', value: 'preacher_curls' },
  { label: 'Barbell Curls', value: 'barbell_curls' },
  { label: 'Concentration Curls', value: 'concentration_curls' },
  { label: 'EZ Bar Curls', value: 'ez_bar_curls' },
  { label: 'Cable Curls', value: 'cable_curls' },
];

interface DropdownComponentProps {
  value: string;
  setValue: (value: string) => void;
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ value, setValue, isFocus, setIsFocus }) => {
  const theme = useTheme();

  /*
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: theme['color-primary-500'] }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  */

  return (
    <View style={{ ...styles.container, backgroundColor: theme['background-basic-color-100'] }}>
      
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: theme['color-primary-500']}]}
        placeholderStyle={[styles.placeholderStyle, { color: theme['text-hint-color'] }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: theme['text-basic-color'] }]}
        inputSearchStyle={[styles.inputSearchStyle, { color: theme['text-basic-color'] }]}
        iconStyle={styles.iconStyle}
        containerStyle={{ backgroundColor: theme['background-basic-color-3'], borderColor: theme['border-basic-color-1'] }}
        data={data}
        itemTextStyle={{ color: theme['text-basic-color'] }}
        maxHeight={300}
        labelField="label" 
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? theme['color-primary-500'] : theme['text-basic-color']}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});