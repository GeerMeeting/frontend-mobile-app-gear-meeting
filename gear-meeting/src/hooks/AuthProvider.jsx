import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setUser({ token });
        }
      } catch (error) {
        console.error('Erro ao verificar o token do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserToken();
  }, []);

  const signIn = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
      setUser({ token });
    } catch (error) {
      console.error('Erro ao salvar token:', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error('Erro ao remover token:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
