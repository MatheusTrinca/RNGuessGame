import { StyleSheet, Text, View } from 'react-native';
import FormContainer from '../components/FormContainer';
import Heading from '../components/Heading';
import OldGuess from '../components/OldGuess';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Heading text="Opponent's Number" />
      <View style={styles.numberContainer}>
        <Text style={styles.number}>41</Text>
      </View>
      <FormContainer title="Higher or Lower?">
        <View style={styles.buttonsContainer}>
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>-</PrimaryButton>
        </View>
      </FormContainer>
      <View style={styles.oldGuessesContainer}>
        <OldGuess />
        <OldGuess />
        <OldGuess />
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
  numberContainer: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 4,
    borderColor: Colors.secondary600,
    marginTop: 30,
  },
  number: {
    color: Colors.secondary600,
    fontSize: 30,
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
  },
});
