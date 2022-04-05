import { Response, Request } from "express";
import UserService from "../services/user.service";

export class UserController {
  constructor(private userService: UserService) {}

  async registerUser(req: Request, res: Response) {
    try {
      const newUser = req.body;
      const { user, token } = await this.userService.registerUser(newUser);
      res.status(201).json({
        status: "success",
        code: 201,
        message: `User with name:[${user.name}] created`,
        data: {
          user: {
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            date: user.date,
          },
          token: token,
        },
      });
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userToLogin = await this.userService.loginUser(email, password);
      const { user, token } = userToLogin;

      const responseUser = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        id: user._id,
      };
      res.status(200).json({
        status: "success",
        code: 200,
        message: `User with email:[${email}] authorized`,
        data: {
          user: responseUser,
          token,
        },
      });
    } catch (error) {
      res.status(401).json({
        message: "User unauthorized, wrong password",
      });
    }
  }
}

const userController = new UserController(new UserService());
export default userController;
