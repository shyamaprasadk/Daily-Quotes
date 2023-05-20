import React from 'react';
import { View } from 'react-native';
import Home from '../components/home/Home';
import styles from '../global/styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default HomeScreen;
