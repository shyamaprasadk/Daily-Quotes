import {Appearance, StyleSheet} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

export default styles;
