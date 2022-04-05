import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const { _id } = req.user;
    const { page, filterByTitle, filterByPublic, filterByCompleted } =
      req.query;

    const searchQuery = {
      title: filterByTitle,
      public: filterByPublic,
      completed: filterByCompleted,
    };

    const searchParams = Object.entries(searchQuery).reduce((acc, el) => {
      const option = { [el[0]]: el[1] };

      if (el[1] === undefined || el[1] === "null" || el[1] === " ") {
        return acc;
      } else {
        return (acc = { ...acc, ...option });
      }
    }, []);

    try {
      const todos = await this.todoService.findAll(_id, page, searchParams);
      res.status(200).json({
        status: "success",
        code: 200,
        message: `Todos found`,
        data: {
          todos,
        },
      });
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async addNewTodo(req: Request, res: Response) {
    const body = req.body;
    const { _id } = req.user;
    const { title } = req.body;
    const createdTodo = await this.todoService.addNewTodo({
      ...body,
      owner: _id,
    });
    res.status(201).json({
      status: "success",
      code: 201,
      message: `Todo with title:[${title}] created`,
      data: {
        createdTodo,
      },
    });
  }

  async updateTodo(req: Request, res: Response) {
    const body = req.body;
    const { _id } = req.user;
    const { todoId } = req.params;
    const updatedTodo = await this.todoService.updateTodo(todoId, {
      ...body,
      owner: _id,
    });

    if (!updatedTodo) {
      res.status(404).send(`Todo with id:${todoId} not found`);
    } else {
      res.status(200).json({
        status: "success",
        code: 200,
        message: `Todo with id:${todoId} updated`,
        data: {
          updatedTodo,
        },
      });
    }
  }

  async deleteTodo(req: Request, res: Response) {
    const { todoId } = req.params;
    const deletedTodo = await this.todoService.deleteTodo(todoId);
    if (!deletedTodo) {
      res.status(404).send(`Todo with id:${todoId} not found`);
    } else {
      res.status(200).json({
        status: "success",
        code: 200,
        message: `Todo with id:${todoId} deleted`,
        data: {
          deletedTodo,
        },
      });
    }
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
