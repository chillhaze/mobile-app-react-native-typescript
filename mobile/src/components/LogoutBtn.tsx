import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import THEME from '../consts/theme';
import { useNavigation } from '@react-navigation/native';
import AuthStorage from '../service/storage';

export default function LogoutBtn() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={async () => {
        await AuthStorage.removeValue();
        navigation.navigate('Login');
      }}
      style={styles.button}
    >
      {({ pressed }: boolean) => {
        return (
          <Ionicons
            name={'log-out-outline'}
            color={pressed ? THEME.colors.accentColor : THEME.colors.white}
            style={styles.icon}
          />
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 22,
  },
});
