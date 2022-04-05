import { useQuery } from 'react-query';
import TodoService from '../service/todo.service';
import { IFilterTypes } from '../types/FilteredTypes';
import REACT_QUERY_KEYS from '../consts/query-keys';
const todoService = new TodoService();

export default function useGetTodos(props: {
  filter: IFilterTypes;
  page: number;
}) {
  const { data, isLoading, refetch } = useQuery(REACT_QUERY_KEYS.TODOS, () => {
    return todoService.getTodos(props);
  });

  return {
    todos: data,
    isLoading,
    refetch,
  };
}
