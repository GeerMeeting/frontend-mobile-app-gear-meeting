import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ticket from '../screens/Ticket';
import Map from '../screens/Map';
import Schedule from '../screens/Schedule';
import { Image } from 'react-native';
import home from '../../assets/home.png'
import ticket from '../../assets/ticket.png'
import map from '../../assets/map.png'
import schedule from '../../assets/schedule.png'
import MyProfile from '../screens/MyProfile';
import Pilots from '../screens/Pilots';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Ticket"
      component={Ticket}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Map"
      component={Map}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Schedule"
      component={Schedule}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="MyProfile"
      component={MyProfile}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Pilots"
      component={Pilots}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const PrivateRoutes = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false , 
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: '#000' , borderTopRightRadius: 20, borderTopLeftRadius: 20, height:90, position: 'absolute'},
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{ tabBarIcon: ({ focused }) => (
          <Image
            source={home}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? 'blue' : 'white',
            }}
          />
        ),}}
      />
      <Tab.Screen 
        name="Ticket" 
        component={Ticket} 
        options={{ tabBarIcon: ({ focused }) => (
          <Image
            source={ticket}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? 'blue' : 'white',
            }}
          />
        ),}}
      />
      <Tab.Screen 
        name="Map" 
        component={Map} 
        options={{ tabBarIcon: ({ focused }) => (
          <Image
            source={map}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? 'blue' : 'white',
            }}
          />
        ),}}
      />
      <Tab.Screen 
        name="Schedule" 
        component={Schedule} 
        options={{ tabBarIcon: ({ focused }) => (
          <Image
            source={schedule}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? 'blue' : 'white',
            }}
          />
        ),}}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoutes;
