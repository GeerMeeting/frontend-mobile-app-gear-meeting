import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './src/hooks/AuthProvider';
import PublicRoutes from './src/routes/publicRoutes';
import PrivateRoutes from './src/routes/privateRoutes';

const Stack = createStackNavigator();

const AppContent = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="PrivateRoutes"
            component={PrivateRoutes}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="PublicRoutes"
            component={PublicRoutes}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
