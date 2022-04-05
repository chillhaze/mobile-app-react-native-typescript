import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import THEME from '../consts/theme';
import { FormikErrors, FormikHandlers, FormikTouched } from 'formik';

interface IInputProps {
  name: string;
  label: string;
  onChangeText: Function | any;
  onBlur: FormikHandlers['handleBlur'];
  value: string;
  keyboardType?: string | undefined;
  touched?: FormikTouched<{
    [field: string]: any;
  }>;
  errors?: FormikErrors<{
    [field: string]: any;
  }>;
}

export default function Input(props: IInputProps) {
  const { name, label, touched, errors, onChangeText, onBlur, value } = props;

  return (
    <View style={styles.input}>
      <View style={styles.container}>
        {props.name !== 'filterByTitle' ? (
          <Text style={styles.label}>{label}</Text>
        ) : null}
        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          style={[
            props.name === 'filterByTitle'
              ? styles.textInputFilter
              : styles.textInput,
          ]}
        />
      </View>
      {touched && errors && touched[name] && errors[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { position: 'relative' },
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
  textInputFilter: {
    height: THEME.spacing.base * 13,
    padding: THEME.spacing.double,
    marginBottom: THEME.spacing.base,
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
