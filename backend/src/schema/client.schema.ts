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
    phoneNumber: Joi.string().empty([null, '']).required().pattern(/^\d{10}$/).messages(messages),
    email: Joi.string().trim().regex(/^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/).required().messages(messages),
})

export const usersUpdateSchema = usersCreateSchema;
