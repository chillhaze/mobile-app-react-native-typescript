import React, { useEffect, useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import THEME from '../../consts/theme';
import { ITodo } from '../../types/Todo.type';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutBtn from '../../components/LogoutBtn';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useGetTodos from '../../hooks/useGetTodos';
import { useNavigation } from '@react-navigation/native';
import { IFilterTypes } from '../../types/FilteredTypes';
import useEditTodo from '../../hooks/useEditTodo';
import useCreateTodo from '../../hooks/useCreateTodo';

const Tab = createBottomTabNavigator();

export default function TodoContainer() {
  const [editTodo, setEditTodo] = useState({});
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const { todos, isLoading, refetch } = useGetTodos({ filter, page });
  const { navigate } = useNavigation();

  useEffect(() => {
    refetch();
  }, [filter, page]);

  const handlePageChange = (btnName: string) => {
    if (btnName === 'decrement') setPage((prev) => prev - 1);
    if (btnName === 'increment') setPage((prev) => prev + 1);
  };

  const handleFilterSelection = (values: IFilterTypes) => {
    const options = Object.entries(values).reduce((acc, el) => {
      const option = { [el[0]]: el[1] };
      if (el[1] === '') {
        return acc;
      } else if (el[1] === false) {
        return acc;
      } else {
        return (acc = { ...acc, ...option });
      }
    }, {});

    setFilter(options);
  };

  const handleTodoSelection = (todoToEdit: ITodo) => {
    setEditTodo(todoToEdit);
    navigate('EditTodo');
    refetch();
  };

  const { createTodoQuery } = useCreateTodo();
  const handleCreateTodo = async (todoToCreate) => {
    const isCreated = await createTodoQuery(todoToCreate);
    if (isCreated) {
      navigate('TodoList');
    }
  };

  const { editTodoQuery } = useEditTodo();
  const handleTodoToEdit = async (todoToEdit: ITodo) => {
    const isEdited = await editTodoQuery(todoToEdit);
    if (isEdited) {
      navigate('TodoList');
    }
  };

  const { deleteTodoQuery } = useDeleteTodo();
  const handleRemove = (id: string) => {
    deleteTodoQuery(id);
  };

  return (
    <Tab.Navigator
      initialRouteName="TodoList"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: THEME.colors.mainBg },
        headerTitleStyle: { color: THEME.colors.white },
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: THEME.spacing.base * 28,
        },
        tabBarActiveTintColor: THEME.colors.primaryLighter,
        tabBarInactiveTintColor: THEME.colors.grey,
        tabBarIcon: (tabInfo) => {
          let iconName;

          if (route.name === 'CreateTodo') {
            iconName = tabInfo.focused
              ? 'ios-document'
              : 'ios-document-outline';
          } else if (route.name === 'TodoList') {
            iconName = tabInfo.focused
              ? 'ios-documents'
              : 'ios-documents-outline';
          } else if (route.name === 'EditTodo') {
            iconName = tabInfo.focused
              ? 'ios-document-text'
              : 'ios-document-text-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={32}
              color={
                tabInfo.focused ? THEME.colors.primary : THEME.colors.darkGrey
              }
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="CreateTodo"
        options={{
          headerRight: () => <LogoutBtn />,
        }}
      >
        {() => <CreateTodo handleCreateTodo={handleCreateTodo} />}
      </Tab.Screen>

      <Tab.Screen
        name="TodoList"
        options={{
          headerRight: () => <LogoutBtn />,
        }}
      >
        {() => (
          <TodoList
            handlePageChange={handlePageChange}
            handleFilterSelection={handleFilterSelection}
            handleTodoSelection={handleTodoSelection}
            handleRemove={handleRemove}
            todos={todos}
            isLoading={isLoading}
            page={page}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="EditTodo"
        options={{
          headerRight: () => <LogoutBtn />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      >
        {() => <EditTodo todo={editTodo} handleTodoToEdit={handleTodoToEdit} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
