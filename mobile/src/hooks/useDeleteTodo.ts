import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../service/todo.service';
const todoService = new TodoService();
import REACT_QUERY_KEYS from '../consts/query-keys';

export default function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    (id: string) => todoService.deleteTodo(id),
    {
      onSuccess() {
        queryClient.invalidateQueries(REACT_QUERY_KEYS.TODOS);
      },
    },
  );

  return { deleteTodoQuery: mutateAsync };
}
