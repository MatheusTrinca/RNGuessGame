import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const FormContainer = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formHeading}>{title}</Text>
      {children}
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 280,
    padding: 16,
    backgroundColor: Colors.primary700,
    marginTop: 30,
    borderRadius: 6,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
  },
  formHeading: {
    color: Colors.secondary600,
    fontSize: 22,
  },
});
