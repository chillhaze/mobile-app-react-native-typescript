import { Router, Request, Response } from "express";
import { validation } from "../../middlewares/validation";
import { joiUserRegisterSchema } from "../../schemas/joiUserRegisterSchema";
import { joiUserLoginSchema } from "../../schemas/joiUserLoginSchema";
import { checkUserByEmail } from "../../middlewares/checkUserByEmail";
import { checkUserLogin } from "../../middlewares/checkUserLogin";
import userController from "../../controllers/user.controller";

const validateRegistrationSchema = validation(joiUserRegisterSchema);
const validateLoginSchema = validation(joiUserLoginSchema);

const userRouter: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public

userRouter.post(
  "/register",
  checkUserByEmail,
  validateRegistrationSchema,
  userController.registerUser.bind(userController),
);

userRouter.post(
  "/login",
  checkUserLogin,
  validateLoginSchema,
  userController.loginUser.bind(userController),
);

userRouter.post("/logout", async (_: Request, res: Response) => {
  res.send("Add logout logic there");
});

export default userRouter;
