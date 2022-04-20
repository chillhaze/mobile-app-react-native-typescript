import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Todos: undefined;
  Auth: undefined;
};

export type TTodosScreenProp = StackNavigationProp<RootStackParamList, 'Todos'>;
export type TAuthScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export type TodosStackParamList = {
  TodoList: undefined;
  CreateTodo: undefined;
  EditTodo: undefined;
};

export type TTodosClosedScreenProp = StackNavigationProp<
  TodosStackParamList,
  'TodoList' | 'CreateTodo' | 'EditTodo'
>;

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
