import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import THEME from '../consts/theme';
import { Formik } from 'formik';
import Checkbox from '../components/Checkbox';
import Input from './Input';

interface IFilterProps {
  handleFilterSelection: () => void;
}

export const Filter: React.FC<IFilterProps> = (props) => {
  return (
    <View style={styles.filter}>
      <Formik
        initialValues={{
          filterByTitle: '',
          filterByPublic: null,
          filterByCompleted: null,
        }}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          props.handleFilterSelection(values);
          actions.resetForm();
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <View>
            <Text style={styles.filterTitle}>{'Filter:'}</Text>

            <Input
              name={'filterByTitle'}
              label={'Title'}
              onChangeText={handleChange('filterByTitle')}
              onBlur={handleBlur('filterByTitle')}
              value={values.filterByTitle}
              keyboardType="default"
            />

            <View style={styles.checkboxWrapper}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  isChecked={values.filterByPublic}
                  name="filterByPublic"
                  title="Public"
                  handleCheckBoxValue={setFieldValue}
                />
              </View>

              <View style={styles.checkboxContainer}>
                <Checkbox
                  isChecked={values.filterByCompleted}
                  name="filterByCompleted"
                  title="Completed"
                  handleCheckBoxValue={setFieldValue}
                />
              </View>
            </View>

            <Pressable style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonTxt}>{'Filter Todos'}</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filter: { justifyContent: 'center', marginBottom: 20 },
  filterTitle: {
    textAlign: 'left',
    marginBottom: THEME.spacing.base,
    color: THEME.colors.mainText,
    fontSize: THEME.font.min * 2,
    fontWeight: 'bold',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    // marginTop: THEME.spacing.triple * 3,
    // marginBottom: THEME.spacing.triple * 4,
  },
  checkboxContainer: {
    alignItems: 'center',
    margin: THEME.spacing.base,
  },
  lastCheckboxContainer: { alignItems: 'center' },
  checkboxTextStyle: {
    textDecorationLine: 'none',
    color: THEME.colors.mainText,
    fontWeight: 'bold',
  },
  button: {
    height: THEME.spacing.base * 8,
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
  buttonTxt: { color: THEME.colors.white, fontSize: THEME.font.min * 2 },
});
