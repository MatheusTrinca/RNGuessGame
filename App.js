import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userNumber, setUserNumber] = useState('');

  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <>
      <StatusBar />
      <LinearGradient colors={['#9c0544', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.25,
  },
});
