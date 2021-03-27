import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useLora, Lora_500Medium } from '@expo-google-fonts/lora';

import { SafeArea } from './src/components/utils/safe-area.component';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

import { theme } from './src/infrastructure/theme';

import { Text } from 'react-native';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = TAB_ICONS[route.name] + (!focused ? '-outline' : '');

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

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
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
