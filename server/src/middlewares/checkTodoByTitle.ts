import { Response, Request, NextFunction } from "express";
import Todo from "../models/Todo";

export const checkTodoByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;

  // Find Todo by title
  const existingTodo = await Todo.findOne({
    title,
  });

  if (existingTodo) {
    return res.status(404).send(`Todo with title:"${title}" already exists`);
  } else {
    next();
  }
};
