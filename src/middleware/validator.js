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
  }
};
