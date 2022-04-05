import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Formik } from 'formik';
import THEME from '../../consts/theme';
import AuthInput from '../../components/AuthInput';
import registerValidation from '../../consts/registerValidation';
import useRegisterUser from '../../hooks/useRegisterUser';
import { useNavigation } from '@react-navigation/native';
import AuthStorage from '../../service/storage';

export default function Register() {
  const { registerUserMutation } = useRegisterUser();
  const navigation = useNavigation();

  useEffect(() => {
    AuthStorage.removeValue();
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <ScrollView contentContainerStyle={styles.container} maximumZoomScale={2}>
        <Formik
          initialValues={{
            userName: '',
            email: '',
            password: '',
            verifyPassword: '',
          }}
          onSubmit={async (values) => {
            const isRegistered = await registerUserMutation(values);
            if (isRegistered) {
              navigation.navigate('Todos');
            }
          }}
          validateOnBlur
          validationSchema={registerValidation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <View>
              <AuthInput
                name={'userName'}
                label={'Username'}
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                touched={touched}
                errors={errors}
              />

              <AuthInput
                name={'email'}
                label={'Email'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched}
                errors={errors}
              />

              <AuthInput
                name={'password'}
                label={'Password'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
                touched={touched}
                errors={errors}
              />

              <AuthInput
                name={'verifyPassword'}
                label={'Verify Password'}
                input={'last'}
                onChangeText={handleChange('verifyPassword')}
                onBlur={handleBlur('verifyPassword')}
                value={values.verifyPassword}
                secureTextEntry={true}
                touched={touched}
                errors={errors}
              />

              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonTxt}>{'Register'}</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.spacing.double * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: { position: 'relative' },
  lastInput: {
    marginBottom: THEME.spacing.double * 4,
    position: 'relative',
  },
  error: {
    position: 'absolute',
    bottom: THEME.spacing.base,
    color: THEME.colors.accentColor,
    fontSize: THEME.font.min,
  },
  button: {
    height: THEME.spacing.base * 13,
    justifyContent: 'center',
    alignItems: 'center',
    padding: THEME.spacing.base,
    backgroundColor: THEME.colors.accentColor,
    borderRadius: THEME.border.baseRadius,

    shadowColor: THEME.shadow.color,
    shadowOffset: {
      width: THEME.shadow.offset.width,
      height: THEME.shadow.offset.height,
    },
    shadowOpacity: THEME.shadow.opacity * 2,
    shadowRadius: THEME.shadow.radius,
    elevation: THEME.shadow.elevation,
  },
  buttonTxt: { color: THEME.colors.white, fontSize: THEME.font.min * 3 },
});
