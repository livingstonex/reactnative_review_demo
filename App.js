import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'indie': require('./assets/fonts/IndieFlower-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
    return (
     <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts()}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log('Fonts loading failed')}
      />
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
