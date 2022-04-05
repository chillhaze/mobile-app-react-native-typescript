import React from 'react';
import Input from './Input';
import { Formik } from 'formik';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import todoValidation from '../consts/todoValidation';
import THEME from '../consts/theme';
import Checkbox from './Checkbox';
import { IInitialValues } from '../types/InitialValues.type';

export default function TodoSample(props: IInitialValues) {
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <ScrollView contentContainerStyle={styles.container} maximumZoomScale={2}>
        <Formik
          initialValues={{
            ...props,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            const newTodo: IInitialValues = {
              title: values.title,
              description: values.description,
              year: values.year,
              public: values.public,
              completed: values.completed,
            };

            if (
              values.options &&
              values.options.buttonTitle === 'Create todo'
            ) {
              values.options.queryFunc
                ? values.options.queryFunc(newTodo)
                : null;
            } else {
              const id = values.options ? values.options.id : null;
              values.options?.queryFunc
                ? values.options.queryFunc({ ...newTodo, id })
                : null;
            }
          }}
          validateOnBlur
          validationSchema={todoValidation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <View>
              <Input
                name={'title'}
                label={'Title'}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                keyboardType="default"
                touched={touched}
                errors={errors}
              />

              <Input
                name={'description'}
                label={'Description'}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                keyboardType="default"
                touched={touched}
                errors={errors}
              />

              <Input
                name={'year'}
                label={'Year'}
                onChangeText={handleChange('year')}
                onBlur={handleBlur('year')}
                value={values.year.toString()}
                keyboardType="numeric"
                touched={touched}
                errors={errors}
              />

              <View style={styles.checkboxWrapper}>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    isChecked={props.public}
                    name="public"
                    title="Public"
                    handleCheckBoxValue={setFieldValue}
                  />
                </View>

                <View style={styles.lastCheckboxContainer} key="lastCheckbox">
                  <Checkbox
                    isChecked={props.completed}
                    name="completed"
                    title="Completed"
                    handleCheckBoxValue={setFieldValue}
                  />
                </View>
              </View>

              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonTxt}>
                  {props.options ? props.options.buttonTitle : null}
                </Text>
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
  checkboxWrapper: {
    flexDirection: 'row',
    marginTop: THEME.spacing.triple * 3,
    marginBottom: THEME.spacing.triple * 4,
  },
  checkboxContainer: {
    alignItems: 'center',
    marginRight: THEME.spacing.triple * 4,
  },
  lastCheckboxContainer: { alignItems: 'center' },
  checkboxTextStyle: {
    textDecorationLine: 'none',
    color: THEME.colors.mainText,
    fontWeight: 'bold',
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
