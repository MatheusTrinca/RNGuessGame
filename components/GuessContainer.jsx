import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const GuessContainer = ({ guess }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{guess}</Text>
    </View>
  );
};

export default GuessContainer;

const styles = StyleSheet.create({
  numberContainer: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 4,
    borderColor: Colors.secondary600,
    marginTop: 30,
  },
  number: {
    fontFamily: 'open-sans-bold',
    color: Colors.secondary600,
    fontSize: 30,
  },
});
