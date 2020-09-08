import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from "./src/contexts/auth";
import { PreferencesProvider } from "./src/contexts/userPreferences";

export default function App() {
  return (
    <NavigationContainer>
      <PreferencesProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PreferencesProvider>
    </NavigationContainer>
  );
}
