import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { StyleSheet, View } from 'react-native';
import THEME from '../consts/theme';

interface ICheckbox {
  name: string;
  title: string;
  isChecked: boolean;
  handleCheckBoxValue: Function;
}

export default function Checkbox({
  name,
  title,
  isChecked,
  handleCheckBoxValue,
}: ICheckbox) {
  return (
    <View style={styles.checkboxContainer}>
      <BouncyCheckbox
        size={THEME.spacing.triple * 2}
        text={title}
        textStyle={styles.checkboxTextStyle}
        isChecked={isChecked}
        fillColor={THEME.colors.primary}
        iconStyle={{
          borderColor: THEME.colors.primary,
          borderWidth: THEME.border.width.thin,
        }}
        onPress={(isChecked: boolean) => handleCheckBoxValue(name, isChecked)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'center',
    margin: THEME.spacing.double,
  },
  checkboxTextStyle: {
    textDecorationLine: 'none',
    color: THEME.colors.mainText,
    fontWeight: 'bold',
  },
});
