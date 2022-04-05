import { Model, model, Schema } from "mongoose";
import { ITodo } from "../types/todos.type";

// TODO: Use it as an example
/**
 * Interface to model the Todo Schema for TypeScript.
 * @param title:string
 * @param description:string
 * @param year:number
 * @param public:boolean
 * @param completed:boolean
 */

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      default: Date.now,
    },
    public: {
      type: Boolean,
      default: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
