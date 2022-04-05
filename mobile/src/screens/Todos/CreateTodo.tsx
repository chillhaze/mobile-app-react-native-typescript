import React from 'react';
import getYear from '../../utils/getYear';
import TodoSample from '../../components/TodoSample';
import { IInitialValues } from '../../types/InitialValues.type';

interface ICreateToDoProps {
  handleCreateTodo: () => void;
}

export const CreateTodo: React.FC<ICreateToDoProps> = ({
  handleCreateTodo,
}) => {
  const actualYear = getYear();
  const initialValues: IInitialValues = {
    title: '',
    description: '',
    year: actualYear,
    public: true,
    completed: false,
    options: {
      buttonTitle: 'Create todo',
      queryFunc: handleCreateTodo,
      id: '',
    },
  };
  return (
    <>
      <TodoSample {...initialValues} />
    </>
  );
};

export default CreateTodo;
