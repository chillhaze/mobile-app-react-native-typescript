import Joi from "joi";

// JOI validation schema
export const joiTodoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  year: Joi.number().required(),
  public: Joi.boolean().required(),
  completed: Joi.boolean().required(),
});
