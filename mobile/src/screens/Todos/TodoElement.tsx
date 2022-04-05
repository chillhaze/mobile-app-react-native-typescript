import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import THEME from '../../consts/theme';
import { ITodo } from '../../types/Todo.type';

export default function TodoElement({ todo, onRemove }: ITodo) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.titleWrapper}>
          <Text style={styles.basicTitle}>Title:</Text>
          <Text style={styles.title}>{todo.title}</Text>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.basicTitle}>Description:</Text>
          <Text style={styles.description}>{todo.description}</Text>
        </View>
      </View>

      <View style={styles.options}>
        <View style={styles.checkerWrapper}>
          <Text style={styles.checkerTrue}>{todo.year}</Text>

          <Text style={todo.public ? styles.checkerTrue : styles.checkerFalse}>
            {todo.public ? 'Public' : 'Not Public'}
          </Text>

          <Text
            style={todo.completed ? styles.checkerTrue : styles.checkerFalse}
          >
            {todo.completed ? 'Completed' : 'Not Completed'}
          </Text>
        </View>

        {/* <Pressable
          style={styles.button}
          onPress={onRemove ? () => onRemove(todo._id) : null}
        >
          <Text style={styles.buttonTxt}>{'Delete'}</Text>
        </Pressable> */}

        <TouchableHighlight
          style={styles.button}
          underlayColor={THEME.colors.primary}
          onPress={onRemove ? () => onRemove(todo._id) : null}
        >
          <Text style={styles.buttonTxt}>{'Delete'}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    minWidth: '100%',
    alignItems: 'flex-start',
    marginVertical: THEME.spacing.base,
    padding: THEME.spacing.double,
    borderWidth: THEME.border.width.thin,
    borderColor: THEME.colors.primary,
    borderRadius: THEME.border.baseRadius,
    backgroundColor: THEME.colors.secondaryBg,
    shadowColor: THEME.shadow.color,
    shadowOffset: {
      width: THEME.shadow.offset.width,
      height: THEME.shadow.offset.height,
    },
    shadowOpacity: THEME.shadow.opacity,
    shadowRadius: THEME.shadow.radius,
    elevation: THEME.shadow.elevation,
  },
  box: {},
  titleWrapper: {
    flexDirection: 'row',
    marginBottom: THEME.spacing.double,
  },
  basicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.mainText,
    marginRight: THEME.spacing.double,
  },
  title: {
    color: THEME.colors.mainText,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: THEME.spacing.double,
  },
  descriptionWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: THEME.spacing.double,
  },
  description: {
    maxWidth: '100%',
    fontSize: 20,
    color: THEME.colors.secondaryText,
    marginRight: THEME.spacing.double,
    overflow: 'visible',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  checkerWrapper: { flexDirection: 'row' },
  checkerTrue: {
    marginRight: THEME.spacing.base,
    padding: THEME.spacing.base,
    backgroundColor: THEME.colors.mainBg,
    color: THEME.colors.white,
    borderRadius: THEME.border.baseRadius,
  },
  checkerFalse: {
    marginRight: THEME.spacing.base,
    padding: THEME.spacing.base,
    backgroundColor: THEME.colors.secondaryBg,
    color: THEME.colors.accentColor,
    borderRadius: THEME.border.baseRadius,
  },
  button: {
    marginRight: THEME.spacing.base,
    padding: THEME.spacing.base,
    backgroundColor: THEME.colors.accentColor,
    borderRadius: THEME.border.baseRadius,

    shadowColor: THEME.shadow.color,
    shadowOffset: {
      width: THEME.shadow.offset.width,
      height: THEME.shadow.offset.height,
    },
    shadowOpacity: THEME.shadow.opacity,
    shadowRadius: THEME.shadow.radius,
    elevation: THEME.shadow.elevation,
  },
  buttonTxt: { color: THEME.colors.white },
});
