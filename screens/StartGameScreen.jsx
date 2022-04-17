import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>Guess My Number</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Enter a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonsContainer}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#aa2065',
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
    width: 250,
    padding: 16,
    backgroundColor: '#53022b',
    marginTop: 20,
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
    fontSize: 18,
    paddingBottom: 4,
    color: '#cfab07',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
