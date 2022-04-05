import { Router } from "express";
import todoController from "../../controllers/todo.controller";
import { validation } from "../../middlewares/validation";
import { joiTodoSchema } from "../../schemas/joiTodoSchema";
import { checkTodoByTitle } from "../../middlewares/checkTodoByTitle";
import { checkTodoById } from "../../middlewares/checkTodoById";
import { authUser } from "../../middlewares/authUser";

const validateMiddleware = validation(joiTodoSchema);
const todosRouter: Router = Router();

todosRouter.get("", authUser, todoController.getAllTodo.bind(todoController));

todosRouter.post(
  "",
  authUser,
  validateMiddleware,
  checkTodoByTitle,
  todoController.addNewTodo.bind(todoController),
);

todosRouter.put(
  "/:todoId",
  authUser,
  checkTodoById,
  validateMiddleware,
  todoController.updateTodo.bind(todoController),
);

todosRouter.delete(
  "/:todoId",
  authUser,
  authUser,
  checkTodoById,
  todoController.deleteTodo.bind(todoController),
);

export default todosRouter;
