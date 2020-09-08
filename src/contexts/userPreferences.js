import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../styles'


const PreferencesContextTypes = {
  Theme: String,
  FontSize: Number,
}

const PreferencesContext = createContext(PreferencesContextTypes);

const PreferencesProvider = ({ children }) => {
  // const [theme, setTheme] = useState('ligth')
  const [theme, setTheme] = useState('dark')
  const [fontSize, setFontSize] = useState(14)


  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedTheme = await AsyncStorage.getItem('@RNPreferences:theme');
  //     const storagedFontSize = await AsyncStorage.getItem('@RNPreferences:fontSize');

  //     if (storagedTheme && storagedFontSize) {
  //       setTheme(JSON.parse(storagedTheme));
  //       setFontSize(JSON.parse(storagedFontSize));
  //     }
  //   }

  //   loadStorageData();
  // }, []);


  return (
    <PreferencesContext.Provider
      value={{ theme, fontSize }}>
      {children}
    </PreferencesContext.Provider>
  );
}

function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error('usePreferences must be used within an PreferencesProvider.');
  }
  return context;
}

function getStyles() {
  const { theme } = usePreferences()
  return Styles(theme);
}


export { PreferencesProvider, usePreferences, getStyles };