import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Screen2 from '../screen2/Screen2';

function Screen1() {
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);

  const [searchedTxt, setSearchedTxt] = useState('');
  const Txthandle = (e: any) => {
    setSearchedTxt(e);
  };

  const [newWord, setNewWord] = useState('');
  const [checkedWord, setCheckedWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');
  const [resp, setResp] = useState([]);

  const searchWord = (enteredWord: any) => {
    setNewWord(enteredWord);
  };

  const BackBtn = () => {
    setScreen1(true);
    setScreen2(false);
    setCheckedWord('');
    setDefinition('');
    setExample('');
    setNewWord('');
  };

  const getInfo = () => {
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + newWord;

    return fetch(url)
      .then(data => {
        return data.json();
      })
      .then(response => {
        let word = response[0].word;
        setCheckedWord(word);

        let def = response[0].meanings[0].definitions[0].definition;
        setDefinition(def);

        let res = response;
        setResp(res);

        let eg = response[0].meanings[0].definitions[0].example;
        setExample(eg);
      });
  };

  const clear = () => {
    setCheckedWord('');
    setDefinition('');
    setExample('');
    setNewWord('');
  };

  // if (resp) {
  //   console.log(resp);
  // }

  const [randomWord, setRandomWord] = useState();

  useEffect(() => {
    let url = 'https://random-words-api.vercel.app/word';
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(resp => {
        setRandomWord(resp[0]);
      });
  }, []);

  return (
    <View style={styles.container}>
      {screen1 && (
        <LinearGradient
          colors={['#eedca1', '#ffcea3', '#ffc1b3', '#ffbacc', '#f9b9e6']}
          style={styles.linearGradient}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <View style={styles.randomWordView}>
              <Text style={styles.wordOfDayTitle}>Word of the day</Text>
              {randomWord && (
                <Text style={styles.wordOfDay}>{randomWord?.word} : </Text>
              )}
              {randomWord && (
                <Text
                  style={{fontSize: 20, color: 'black', fontStyle: 'italic'}}>
                  {randomWord?.definition}
                </Text>
              )}
            </View>
          </View>

          <View style={{flex: 0.8}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                style={styles.inputBox}
                placeholder="Type here.."
                placeholderTextColor={'rgba(0,0,0,0.7)'}
                textAlign="center"
                clearButtonMode="always"
                onChangeText={searchWord}
                value={newWord}></TextInput>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '60%',
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  style={styles.buttonDesign}
                  onPress={() => {
                    getInfo();
                  }}>
                  <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDesign}
                  onPress={() => {
                    clear();
                  }}>
                  <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.content}>
                <TouchableOpacity
                  onPress={() => {
                    setScreen1(false);
                    setScreen2(true);
                  }}>
                  {definition && (
                    <View style={styles.wordMeaning}>
                      <Text style={styles.textDesign}>
                        <Text style={{fontWeight: '700', color: 'black'}}>
                          {checkedWord}
                          {'\n'}
                        </Text>
                        {definition}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setScreen1(false);
                    setScreen2(true);
                  }}>
                  {definition && (
                    <View style={styles.viewMore}>
                      <Text
                        style={{
                          fontWeight: '600',
                          color: 'black',
                          fontSize: 20,
                        }}>
                        View more ..
                        {'\n'}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      )}
      {screen2 && <Screen2 dataProps={resp} bckBtn={BackBtn} />}
    </View>
  );
}

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5EB',
  },

  linearGradient: {
    flex: 1,
  },

  inputBox: {
    width: '80%',
    height: 50,
    borderWidth: 5,
    borderColor: 'darkorange',
    marginTop: 100,
    fontSize: 25,
    borderRadius: 10,
  },
  buttonDesign: {
    backgroundColor: 'darkorange',
    width: 100,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 5,
    color: 'black',
  },
  speakerButton: {
    width: 80,
    height: 80,
  },
  textDesign: {
    width: '100%',
    fontSize: 25,
    backgroundColor: 'orange',
    // marginTop: 10,
    alignItems: 'center',
    // borderWidth: 1,
    // paddingHorizontal: 0,
  },
  wordMeaning: {
    // borderWidth: 5,
    width: '80%',
    marginHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMore: {
    paddingTop: 10,
    textAlign: 'center',
    marginTop: 10,
    // borderWidth: 2,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    // borderWidth: 1,
  },
  wordOfDay: {
    fontSize: 25,
    color: 'black',
  },
  wordOfDayTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  randomWordView: {
    borderWidth: 5,
    borderColor: 'darkorange',
    marginTop: 10,
    paddingHorizontal: 10,
    // fontSize: 25,
    borderRadius: 10,
  },
});
