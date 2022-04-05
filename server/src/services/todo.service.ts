import Todo from "../models/Todo";
import { ITodo } from "todos.type";

export default class TodoService {
  async findAll(id: string, page: string, searchParams) {
    const limit = 4;
    const skip = (Number(page) - 1) * limit;
    return await Todo.find({ owner: id, ...searchParams })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });
  }

  async addNewTodo(body: ITodo) {
    return await Todo.create({ ...body });
  }

  async updateTodo(todoId: string, body: ITodo) {
    return await Todo.findByIdAndUpdate({ _id: todoId }, body);
  }

  async deleteTodo(todoId: string) {
    return await Todo.findByIdAndRemove({
      _id: todoId,
    });
  }
}
