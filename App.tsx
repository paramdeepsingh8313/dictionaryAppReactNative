import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screen/home/Home';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#eedca1', '#ffcea3', '#ffc1b3', '#ffbacc', '#f9b9e6']}
        style={styles.linearGradient}>
        <Home />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF4CF',
    // backgroundColor: 'blue',
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
});
