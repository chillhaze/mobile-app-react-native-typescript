import React from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoElement from './TodoElement';
import THEME from '../../consts/theme';
import Filter from '../../components/Filter';
import { ITodo } from '../../types/Todo.type';

interface IListProps {
  handleTodoSelection: () => void;
  handlePageChange: () => void;
  handleFilterSelection: () => void;
  handleRemove: () => void;
  todos: ITodo[];
  isLoading: boolean;
  page: number;
}

export const TodoList: React.FC<IListProps> = ({
  handleTodoSelection,
  handlePageChange,
  handleFilterSelection,
  handleRemove,
  todos,
  isLoading,
  page,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Filter handleFilterSelection={handleFilterSelection} />

      {isLoading ? (
        <View>
          <Text>{'LOADING...'}</Text>
        </View>
      ) : (
        <View>
          <FlatList
            style={styles.todo}
            data={todos}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleTodoSelection(item)}>
                <TodoElement todo={item} onRemove={handleRemove} />
              </Pressable>
            )}
          />
        </View>
      )}
      <View style={styles.buttonWrapper}>
        <Pressable
          style={styles.button}
          onPress={() => handlePageChange('decrement')}
          disabled={page === 1 ? true : false}
        >
          <Text style={styles.buttonTxt}>{'<'}</Text>
        </Pressable>

        <Text style={styles.pageNumber}>{page}</Text>

        <Pressable
          style={styles.button}
          onPress={() => handlePageChange('increment')}
        >
          <Text style={styles.buttonTxt}>{'>'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: THEME.colors.white,
    textAlign: 'center',
    padding: THEME.spacing.double,
  },
  todo: {
    paddingVertical: THEME.spacing.double,
    paddingHorizontal: THEME.spacing.triple,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: THEME.spacing.base * 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: THEME.spacing.base * 4,
    paddingVertical: THEME.spacing.base * 6,
    margin: 10,
    backgroundColor: THEME.colors.mainBg,
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
  pageNumber: {
    marginHorizontal: 20,
    fontSize: THEME.font.max,
    color: THEME.colors.accentColor,
  },
});
