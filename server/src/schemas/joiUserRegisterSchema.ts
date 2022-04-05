import Joi from "joi";

// JOI User registration validation schema
export const joiUserRegisterSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
  avatar: Joi.string().allow(""),
});
