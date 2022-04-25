import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import GuessContainer from '../components/GuessContainer';
import Heading from '../components/Heading';
import OldGuess from '../components/OldGuess';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!", 'You know that it is wrong', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const nextRandom = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextRandom);
    setGuessRounds(prevState => [...prevState, nextRandom]);
  };

  return (
    <View style={styles.container}>
      <Heading text="Opponent's Number" />
      <GuessContainer guess={currentGuess} />
      <FormContainer title="Higher or Lower?">
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuess('higher')}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </FormContainer>
      <View style={styles.oldGuessesContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <OldGuess guess={item} index={index + 1} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    width: 280,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: Colors.white,
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  oldGuessesContainer: {
    marginTop: 20,
    flex: 1,
    paddingBottom: 10,
  },
});
