import React from 'react';
import {View, useColorScheme} from 'react-native';
import Home from '../components/home/Home';
import {styles} from '../global/styles';

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const style = styles(isDarkMode);

  return (
    <View style={style.container}>
      <Home />
    </View>
  );
};

export default HomeScreen;
