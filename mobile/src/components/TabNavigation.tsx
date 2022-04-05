import React from 'react';
import AuthContainer from '../screens/Authorization/AuthContainer';
import TodoContainer from '../screens/Todos/TodoContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={'Auth'}
      screenOptions={({}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { display: 'none' },
      })}
    >
      <Tab.Screen name="Auth" component={AuthContainer} />
      <Tab.Screen name="Todos" component={TodoContainer} />
    </Tab.Navigator>
  );
}
