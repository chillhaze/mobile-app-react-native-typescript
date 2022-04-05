import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user.type";
// TODO: Use it as an example

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  avatar: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models["User"] ?? mongoose.model("User", userSchema);
