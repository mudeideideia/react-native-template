import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';


const User = {
  name: String,
  email: String,
}

const AuthContextTypes = {
  signed: Boolean,
  user: User | null,
  loading: Boolean,
  signIn: Promise,
  signOut: Function,
}
const AuthContext = createContext(AuthContextTypes);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(user);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    setLoading(true)
    const response = await auth.signIn();
    setLoading(false)
    setUser(response.user);

    // api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}


export { AuthProvider, useAuth };