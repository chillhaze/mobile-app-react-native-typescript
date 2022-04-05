import User from "../models/user";
import { IUser } from "user.type";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

export default class UserService {
  async registerUser(newUser: IUser) {
    const hashPassword = bcrypt.hashSync(
      newUser.password,
      bcrypt.genSaltSync(10),
    );
    const user = await User.create({ ...newUser, password: hashPassword });
    const token = this.createToken(user.email);
    return { success: true, token, user };
  }

  async loginUser(email: string, password: string) {
    const user = await User.findOne({
      email,
    });
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (comparePassword) {
      const token = this.createToken(user.email);
      return { success: true, token, user };
    }
    return;
  }

  createToken(email: string) {
    const user = User.findOne({
      email,
    });
    if (user) {
      const { _id } = user;
      const token = jwt.sign(
        {
          email: email,
          userId: _id,
        },
        config.get("jwtSecret"),
        { expiresIn: config.get("jwtExpiration") },
      );
      return `Bearer ${token}`;
    }
    return "User not found";
  }
}
