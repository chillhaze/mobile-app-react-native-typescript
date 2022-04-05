import { object, string, number, boolean } from 'yup';

const todoValidation = object().shape({
  title: string().min(2).max(150).required('Title is required'),
  description: string().min(2).max(355).required('Description  is required'),
  year: number().required('Year is required'),
  public: boolean().required().oneOf([true, false]),
  completed: boolean().required().oneOf([true, false]),
});

export default todoValidation;
