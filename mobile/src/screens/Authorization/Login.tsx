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
import loginValidation from '../../consts/loginValidation';
import useLoginUser from '../../hooks/useLoginUser';
import { useNavigation } from '@react-navigation/native';
import AuthStorage from '../../service/storage';

export default function Login() {
  const { loginUserMutation } = useLoginUser();
  const navigation = useNavigation();

  useEffect(() => {
    AuthStorage.removeValue();
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        maximumZoomScale={2}
        centerContent={false}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { resetForm }) => {
            await loginUserMutation(values);
            const token = await AuthStorage.getItem();
            if (token) {
              navigation.navigate('Todos');
              resetForm();
            }
          }}
          validateOnBlur
          validationSchema={loginValidation}
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
                name={'email'}
                label={'Email'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email.toLocaleLowerCase()}
                touched={touched}
                errors={errors}
              />

              <AuthInput
                name={'password'}
                label={'Password'}
                input={'last'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
                touched={touched}
                errors={errors}
              />

              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonTxt}>{'Login'}</Text>
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
    marginBottom: THEME.spacing.double * 4,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
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
