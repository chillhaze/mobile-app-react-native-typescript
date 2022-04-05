import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Register from './Register';
import THEME from '../../consts/theme';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AuthContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: THEME.colors.mainBg },
        headerTitleStyle: {
          color: THEME.colors.white,
          padding: 10,
        },
        tabBarShowLabel: true,
        tabBarStyle: { height: THEME.spacing.base * 28 },
        tabBarActiveTintColor: THEME.colors.primaryLighter,
        tabBarInactiveTintColor: THEME.colors.grey,
        tabBarIcon: (tabInfo) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = tabInfo.focused ? 'person' : 'person-outline';
          } else if (route.name === 'Register') {
            iconName = tabInfo.focused ? 'person-add' : 'person-add-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={32}
              color={
                tabInfo.focused ? THEME.colors.primary : THEME.colors.darkGrey
              }
            />
          );
        },
      })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}
