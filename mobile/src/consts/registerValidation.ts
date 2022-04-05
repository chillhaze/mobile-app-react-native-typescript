import { object, string } from 'yup';

const registerValidation = object().shape({
  userName: string()
    .min(3, 'min length is 3 characters')
    .max(15, 'max length is 15 characters')
    .required('Username is required'),
  email: string()
    .email('Must be a valid email')
    .min(3, 'min length is 3 characters')
    .max(255, 'max length is 255 characters')
    .required('Email is required'),
  password: string()
    .min(3, 'min length is 3 characters')
    .max(15, 'max length is 15 characters')
    .required('Required field'),
  verifyPassword: string()
    .min(3, 'min length is 3 characters')
    .max(15, 'max length is 15 characters')
    .required('Required field'),
});

export default registerValidation;
