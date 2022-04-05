import { Response, Request, NextFunction } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "config";

export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  const secretKey: string = config.get("jwtSecret");
  try {
    if (bearer !== "Bearer") {
      res.status(401).send(`Not authorized`);
    }
    const { email } = jwt.verify(token, secretKey);
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send(`Not authorized`);
    }
    req.user = user;
    next();
  } catch (error: Error | unknown) {
    if (error.message === "invalid signature") {
      res.status(401).send(`Invalid signature`);
    }
    next(error);
  }
};
