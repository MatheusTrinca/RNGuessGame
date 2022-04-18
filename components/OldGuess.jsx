import { StyleSheet, Text, View } from 'react-native';

const OldGuess = () => {
  return (
    <View style={styles.container}>
      <Text>#1</Text>
      <Text>Opponents Guess: 41</Text>
    </View>
  );
};

export default OldGuess;

const styles = StyleSheet.create({
  container: {
    width: 290,
    backgroundColor: '#cfab07',
    borderWidth: 2,
    borderColor: '#53022b',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 8,
  },
});
