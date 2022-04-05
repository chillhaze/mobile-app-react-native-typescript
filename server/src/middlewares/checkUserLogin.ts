import { Response, Request, NextFunction } from "express";
import User from "../models/User";

export const checkUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  // Find User by email
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return res.status(401).send(`User with email:"${email}" not found`);
  }
  next();
};
