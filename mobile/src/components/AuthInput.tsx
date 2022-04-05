import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import THEME from '../consts/theme';
import { FormikErrors, FormikHandlers, FormikTouched } from 'formik';

interface IAuthInputProps {
  name: string;
  label: string;
  input?: string;
  onChangeText: Function | any;
  onBlur: FormikHandlers['handleBlur'];
  value: string;
  secureTextEntry?: boolean;
  touched?: FormikTouched<{
    [field: string]: any;
  }>;
  errors?: FormikErrors<{
    [field: string]: any;
  }>;
}

export default function AuthInput(props: IAuthInputProps) {
  const { name, label, input, touched, errors, onChangeText, onBlur, value } =
    props;

  return (
    <View style={input === 'last' ? styles.lastInput : styles.input}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          style={styles.textInput}
          keyboardType={name === 'email' ? 'email-address' : 'default'}
          secureTextEntry={name === 'password' ? true : false}
        />
      </View>

      {touched && errors && touched[name] && errors[name] ? (
        <Text style={styles.error}>{errors[props.name]}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { position: 'relative' },
  lastInput: { position: 'relative', marginBottom: THEME.spacing.double * 4 },
  container: { marginBottom: THEME.spacing.base },
  label: {
    paddingBottom: THEME.spacing.base,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: THEME.font.base,
    fontWeight: 'bold',
    color: THEME.colors.mainText,
  },
  textInput: {
    height: THEME.spacing.base * 13,
    padding: THEME.spacing.double,
    marginBottom: THEME.spacing.double * 3,
    borderColor: THEME.colors.primary,
    borderWidth: THEME.border.width.thin,
    borderRadius: THEME.border.baseRadius,
    backgroundColor: THEME.colors.secondaryBg,
  },
  error: {
    position: 'absolute',
    bottom: THEME.spacing.base * 2,
    color: THEME.colors.accentColor,
    fontSize: THEME.font.min,
  },
});
