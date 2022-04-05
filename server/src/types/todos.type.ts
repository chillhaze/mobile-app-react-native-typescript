import { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  year: number;
  public: boolean;
  completed: boolean;
  id?: string | undefined;
  owner: string;
}
