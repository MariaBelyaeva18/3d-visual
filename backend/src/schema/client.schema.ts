import * as Joi from 'joi';

const messages = {
    'any.required': 'errorEmpty',
    'any.empty': 'errorEmpty',
    'date.base': 'errorEmpty',
};

export const usersCreateSchema = Joi.object({
    name: Joi.string().empty([null, '']).required().messages(messages),
    surname: Joi.string().empty([null, '']).required().messages(messages),
    jobType: Joi.string().empty([null, '']).required().messages(messages),
    phoneNumber: Joi.string().empty([null, '']).pattern(/^\d{10}$/).required().messages(messages),
    email: Joi.string().empty([null, '']).email().required().messages(messages),
})
