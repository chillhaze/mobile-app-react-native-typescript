import { object, string } from 'yup';

const loginValidation = object().shape({
  email: string()
    .email('Must be a valid email')
    .min(3, 'min length is 3 characters')
    .max(255, 'max length is 255 characters')
    .required('Email is required'),
  password: string()
    .min(3, 'min length is 3 characters')
    .max(15, 'max length is 15 characters')
    .required('Required field'),
});

export default loginValidation;
