import {StyleSheet} from 'react-native';

export const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      backgroundColor: isDarkMode ? '#1c1c1e' : '#FFF',
    },
    componentContainer: {
      width: '100%',
      alignItems: 'center',
    },
    button: {
      width: '50%',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: isDarkMode ? '#FFF' : '#1c1c1e',
    },
  });
