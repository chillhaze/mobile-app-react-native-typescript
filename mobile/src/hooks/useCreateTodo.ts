import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../service/todo.service';
const todoService = new TodoService();
import REACT_QUERY_KEYS from '../consts/query-keys';

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    (props) => todoService.createTodo(props),
    {
      onSuccess() {
        queryClient.invalidateQueries(REACT_QUERY_KEYS.TODOS);
      },
    },
  );

  return { createTodoQuery: mutateAsync };
}
