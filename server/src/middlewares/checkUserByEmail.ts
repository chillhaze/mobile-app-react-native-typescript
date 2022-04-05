import { Response, Request, NextFunction } from "express";
import User from "../models/User";

export const checkUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  // Find User by email
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return res
      .status(409)
      .send(`User with email:"${email}" already registered`);
  } else {
    next();
  }
};
