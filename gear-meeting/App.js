import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/hooks/AuthProvider';
import PublicRoutes from './src/routes/publicRoutes';
import PrivateRoutes from './src/routes/privateRoutes';


const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PublicRoutes"
            component={PublicRoutes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivateRoutes"
            component={PrivateRoutes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
