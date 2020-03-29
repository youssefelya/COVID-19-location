import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GooglePositio from './GooglePosition';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

export default function MainComponent() {
    return (  <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-map'
                  : 'ios-map-outline';
              } else if (route.name === 'Login') {
                iconName = focused ? 
                'ios-log-in' : 
                'ios-log-in';
              } 
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={GooglePositio} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    ); 
  }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
  }
