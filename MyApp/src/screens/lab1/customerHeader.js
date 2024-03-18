import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ components }) => {
  return (
    <View style={styles.header}>
      {components.map((component, index) => (
        <View key={index} style={styles.componentContainer}>
          {component()}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', // Set your desired background color here
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Set your desired border color here
  },
  componentContainer: {
    flex: 1,
  },
});

export default CustomHeader;
