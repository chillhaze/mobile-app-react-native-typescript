import { Response, Request, NextFunction } from "express";

export const validation = (schema: any) => {
  return (req: Request, _: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }
    next();
  };
};
