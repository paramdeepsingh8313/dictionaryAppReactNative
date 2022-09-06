import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Screen2(props: any) {
  const [checkedWord, setCheckedWord] = useState('');
  const [pronun, setPronun] = useState('');
  const [definition, setDefinition] = useState([]);

  useEffect(() => {
    setDefinition(props.dataProps[0].meanings);
    setPronun(props.dataProps[0].phonetic);
  }, [props.dataProps]);

  const handleVoice = () => {
    console.log(pronun);
  };
  const backBtn = () => {
    props.bckBtn(false);
    // console.log('back');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#eedca1', '#ffcea3', '#ffc1b3', '#ffbacc', '#f9b9e6']}
        style={styles.linearGradient}>
        <View>
          <TouchableOpacity
            onPress={() => {
              backBtn();
            }}>
            <Text style={{fontSize: 50, fontWeight: '800'}}>&#8592;</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              handleVoice();
            }}>
            <Image
              style={styles.speakerButton}
              source={require('../../assets/speaker1.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pronunciation}>
          <Text style={styles.pronuns}>
            Pronunciation :{' '}
            <Text style={{fontWeight: '700'}}> {pronun && pronun} </Text>
          </Text>
        </View>
        <ScrollView style={styles.ViewBox}>
          {definition.map((ele, index) => {
            return (
              <View style={styles.eachView} key={index}>
                <Text style={styles.header}>
                  {ele?.partOfSpeech} {'\n'}
                  <Text style={styles.headerMeaning}>
                    {ele?.definitions[0]?.definition} {'\n'}
                  </Text>
                  <Text style={styles.headerexample}>
                    eg.{'\t'}
                    {ele?.definitions[0]?.example} {'\n'}
                  </Text>
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5EB',
  },
  linearGradient: {
    flex: 1,
  },
  speakerButton: {
    width: 80,
    height: 80,
  },
  pronunciation: {
    padding: 5,
    width: '100%',
  },
  pronuns: {
    borderWidth: 2,
    padding: 5,
    fontSize: 25,
    color: 'black',
  },
  ViewBox: {
    padding: 5,
    width: '100%',
    maxHeight: 550,
  },
  eachView: {
    borderWidth: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: '800',
    fontSize: 28,
    color: 'black',
  },
  headerMeaning: {
    fontWeight: '600',
    fontSize: 25,
    color: 'black',
  },
  headerexample: {
    fontWeight: '500',
    fontSize: 23,
    color: 'black',
    fontStyle: 'italic',
  },
});
