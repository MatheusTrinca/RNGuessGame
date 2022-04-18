import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import FormContainer from '../components/FormContainer';
import Heading from '../components/Heading';

const StartGameScreen = ({ setUserNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleEnteredNumber(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmHandler() {
    const chosenNumber = +enteredNumber;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number must be beetween 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: cancelHandler },
      ]);
      return;
    }
    setUserNumber(chosenNumber);
    setEnteredNumber('');
  }

  function cancelHandler() {
    setEnteredNumber('');
  }

  return (
    <View style={styles.container}>
      <Heading text="Choose a Number" />
      <FormContainer title="Enter a Number">
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
      </FormContainer>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
