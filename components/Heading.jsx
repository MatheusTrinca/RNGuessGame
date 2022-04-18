import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    borderColor: '#fff',
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
