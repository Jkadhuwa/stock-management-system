/* eslint-disable no-param-reassign */
import Joi from 'joi';

const validationError = (error, res) => res.status(400).json({
  error: error.details[0].message.replace(/\\|(")/g, ''),
});

export default {
  loginValidation(req, res, next) {
    const loginSchema = Joi.object().keys({
      jobId: Joi.string()
        .required().messages({
          'string.base': 'JobId must be a valid Evergreen JobId',
          'string.empty': 'JobId cannot be an empty field',
          'any.required': 'JobId is a required field'
        }),
      password: Joi.string().required(),

    });
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return validationError(error, res);
    }
    return next();
  },

  addProductValidation(req, res, next) {
    const productSchema = Joi.object().keys({
      name: Joi.string()
        .required().messages({
          'string.base': 'Name must be a valid item Name like Guinness',
          'string.empty': 'Name cannot be an empty field',
          'any.required': 'Name is a required field'
        }),
      quantity: Joi.number().min(1).required()
        .messages({
          'number.base': 'Quantity must be a valid number like 10',
          'number.empty': 'Quanity cannot be an empty field',
          'number.min': 'Quantity must be above 0',
          'any.required': 'Quantity is a required field'
        }),

    });
    const { error } = productSchema.validate(req.body);
    if (error) {
      return validationError(error, res);
    }
    return next();
  }
};
