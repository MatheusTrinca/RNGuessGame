import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    width: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#d11765',
  },
  text: {
    color: 'white',
  },
});
