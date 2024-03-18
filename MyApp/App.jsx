import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomHeader from './src/screens/lab1/customerHeader';

const App = () => {
  // Header 1
  const renderLeft1 = () => {
    return (
      <View>
        <Image source={require('./src/assets/images/back_icon.png')} style={{ width: 24, height: 24 }} />
      </View>
    );
  };

  const renderCenter1 = () => {
    return (
      <View style={styles.center}>
        <Text style={styles.boldText}>Header</Text>
      </View>
    );
  };

  const renderRight1 = () => {
    return (
      <View style={styles.right}>
        <Image source={require('./src/assets/images/accout_icon.png')} style={{ width: 24, height: 24 }} />
      </View>
    );
  };

  const components1 = [renderLeft1, renderCenter1, renderRight1];

  // Header 2
  const renderLeft2 = () => {
    return (
      <View>
        <Image source={require('./src/assets/images/back_icon.png')} style={{ width: 24, height: 24 }} />
      </View>
    );
  };

  const renderCenter2 = () => {
    return (
      <View style={styles.center}>
        <Text style={styles.boldText}>Trang chủ</Text>
      </View>
    );
  };

  const renderRight2 = () => {
    return (
      <View style={styles.right}>

      </View>
    );
  };

  const components2 = [renderLeft2, renderCenter2, renderRight2];

  // Header 3
  const renderLeft3 = () => {
    return (
      <View>
        <Image source={require('./src/assets/images/back_icon.png')} style={{ width: 24, height: 24 }} />
      </View>
    );
  };

  const renderCenter3 = () => {
    return (
      <View style={styles.center}>
        
      </View>
    );
  };

  const renderRight3 = () => {
    return (
      <View style={styles.right}>

      </View>
    );
  };

  const components3 = [renderLeft3, renderCenter3, renderRight3];

  return (
    <View>
      <CustomHeader components={components1} />
      <CustomHeader components={components2} />
      <CustomHeader components={components3} />
    </View>
  );
};
const styles =StyleSheet.create({
  boldText:{
    fontWeight:'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    alignSelf: 'flex-end',
  },
})

export default App;
