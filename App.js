import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useLora, Lora_500Medium } from '@expo-google-fonts/lora';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

export default function App() {
  const [oswaldFontLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  const [loraFontLoaded] = useLora({
    Lora_500Medium,
  });

  if (!oswaldFontLoaded || !latoFontLoaded || !loraFontLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
