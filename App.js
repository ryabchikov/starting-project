import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require('./assets/images/background.png')}
        resizeMode='cover'
      >
        <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  backgroundImage: {
    opacity: 0.95,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
