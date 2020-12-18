import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'

import UpdateContext from './src/contexts/Update';

import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    roboto_r: Roboto_400Regular,
    roboto_ri: Roboto_400Regular_Italic,
    roboto_b: Roboto_700Bold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <UpdateContext>
      <StatusBar style="auto" />
      <Routes />
    </UpdateContext>
  );
}
