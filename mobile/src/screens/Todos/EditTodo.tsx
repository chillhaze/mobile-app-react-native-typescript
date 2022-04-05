import React from 'react';
import TodoSample from '../../components/TodoSample';
import { IInitialValues } from '../../types/InitialValues.type';
import { ITodo } from '../../types/Todo.type';

export default function EditTodo({ todo, handleTodoToEdit }: ITodo) {
  const initialValues: IInitialValues = {
    title: todo.title,
    description: todo.description,
    year: todo.year,
    public: todo.public,
    completed: todo.completed,
    options: {
      buttonTitle: 'Accept changes',
      queryFunc: handleTodoToEdit,
      id: todo._id,
    },
  };
  return (
    <>
      <TodoSample {...initialValues} />
    </>
  );
}
