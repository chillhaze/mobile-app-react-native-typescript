import Joi from "joi";

// JOI User login validation schema
export const joiUserLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});
