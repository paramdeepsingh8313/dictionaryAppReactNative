import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Screen1 from '../screen1/Screen1';

function Home() {
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return setShowImg(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.HomeContainer}>
      {showImg && (
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/dictImg.png')}
            style={styles.imgStyle}
            resizeMode="cover"
          />
        </View>
      )}
      {!showImg && <Screen1 />}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
  imgView: {
    // flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: 500,
  },
  imgStyle: {
    width: 350,
    height: 350,
  },
});
