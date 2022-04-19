import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Heading = ({ text }) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
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
});
