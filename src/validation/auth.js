import Joi from 'joi';

const minCharacters = 3;
const maxCharacters = 20;

export const registerUserSchema = Joi.object({
  name: Joi.string()
    .min(minCharacters)
    .max(maxCharacters)
    .required()
    .messages({
      'string.base': 'Username should be a string',
      'string.min': `Username should have at least ${minCharacters} characters`,
      'string.max': `Username should have at most ${maxCharacters} characters`,
      'any.required': 'Username is required',
    }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
});
