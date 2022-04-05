import { Response, Request, NextFunction } from "express";
import Todo from "../models/Todo";

export const checkTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;

  // Find Todo by id
  const existingTodoById = await Todo.findById({
    _id: todoId,
  });

  if (!existingTodoById) {
    return res.status(404).send(`Todo with id:${todoId} not found`);
  } else {
    next();
  }
};
