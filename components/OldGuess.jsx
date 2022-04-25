import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const OldGuess = ({ guess, index }) => {
  return (
    <View style={styles.container}>
      <Text>#{index}</Text>
      <Text>Opponents Guess: {guess}</Text>
    </View>
  );
};

export default OldGuess;

const styles = StyleSheet.create({
  container: {
    width: 290,
    backgroundColor: Colors.secondary600,
    borderWidth: 2,
    borderColor: Colors.primary700,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 8,
  },
});
