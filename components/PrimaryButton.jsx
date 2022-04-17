import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={styles.btnInnerContainer}
        android_ripple={{ color: '#9c0544' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    alignItems: 'center',
    width: 100,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#d11765',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    color: 'white',
  },
});
