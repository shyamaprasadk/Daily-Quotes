import axios from 'axios';
import React, {useState} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {Button} from 'react-native-paper';
import {endpoint} from '../../global/config';
import {styles} from '../../global/styles';

interface Quote {
    content: string;
  }

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Quote[]>([]);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const style = styles(isDarkMode);

  const randomQuotes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${endpoint}`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.componentContainer}>
      {data.map((item, index) => (
        <Text key={index} style={style.text}>
          {item.content}
        </Text>
      ))}
      <Button onPress={randomQuotes} style={style.button} loading={loading}>
        Get Quote
      </Button>
    </View>
  );
};

export default Home;
