import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleEnteredNumber(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmHandler() {
    console.log(enteredNumber);
    setEnteredNumber('');
  }

  function cancelHandler() {
    setEnteredNumber('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>Guess My Number</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={handleEnteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={cancelHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    padding: 6,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 100,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  formContainer: {
    alignItems: 'center',
    width: 280,
    padding: 16,
    backgroundColor: '#53022b',
    marginTop: 30,
    borderRadius: 6,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
  },
  formHeading: {
    color: '#cfab07',
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#cfab07',
    width: 50,
    marginTop: 12,
    fontSize: 22,
    paddingBottom: 4,
    color: '#cfab07',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
});
