import HttpService from './http.service';
import { ITodo } from '../types/Todo.type';
import { IFilterTypes } from '../types/FilteredTypes';

class TodoService extends HttpService {
  todoUrl: string;
  constructor() {
    super();
    this.todoUrl = 'todos';
  }

  async getTodos({
    filter = undefined,
    page = 1,
  }: {
    filter: IFilterTypes | undefined;
    page: string | number;
  }) {
    if (filter) {
      const entries = Object.entries(filter);
      const searchParams = entries.map((el) => [`${el[0]}=${el[1]}`]).join('&');

      const { data } = await this.get({
        url: `${this.todoUrl}?${searchParams}&page=${page}`,
      });
      return data.data.todos;
    } else {
      const { data } = await this.get({
        url: `${this.todoUrl}?page=${page}`,
      });
      return data.data.todos;
    }
  }

  async createTodo(newTodo: ITodo) {
    const { data } = await this.post({ url: this.todoUrl, data: newTodo });

    return data.data;
  }

  async editTodo(editTodo) {
    const {
      title,
      description,
      year,
      public: todoPublicity,
      completed,
      id,
    } = editTodo;

    const { data } = await this.put({
      url: this.todoUrl,
      data: {
        title,
        description,
        year,
        public: todoPublicity,
        completed,
      },
      id,
    });

    return data.data;
  }

  async deleteTodo(id: string) {
    const { data } = await this.delete({
      url: this.todoUrl,
      id,
    });

    return data.data;
  }
}

export default TodoService;
