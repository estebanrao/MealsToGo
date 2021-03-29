import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useLora, Lora_500Medium } from '@expo-google-fonts/lora';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

import { AuthContextProvider } from './src/services/auth/auth.context';

const firebaseConfig = {
  apiKey: 'AIzaSyB4BCorX1RV4wGMgwvkqZS2GngHInuNQeQ',
  authDomain: 'mealstogo-7df84.firebaseapp.com',
  projectId: 'mealstogo-7df84',
  storageBucket: 'mealstogo-7df84.appspot.com',
  messagingSenderId: '1005208600200',
  appId: '1:1005208600200:web:ffa80209e10e046e4be93d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  const [loraFontLoaded] = useLora({
    Lora_500Medium,
  });

  if (!latoFontLoaded || !loraFontLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
