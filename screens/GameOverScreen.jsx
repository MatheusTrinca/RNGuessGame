import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Heading from '../components/Heading';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton';

const GameOverScreen = ({ guessRounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Heading text="GAME OVER!" />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{guessRounds}</Text> to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        <Text style={styles.btnText}>Start New Game</Text>
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  container: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginVertical: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summary: {
    fontSize: 24,
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginVertical: 20,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary600,
  },
  btnText: {
    fontSize: 20,
    fontFamily: 'open-sans',
  },
});
