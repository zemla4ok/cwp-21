const Joi = require('joi');

const schemas = {
    'office': Joi.object().keys({
       title: Joi.string(),
       website: Joi.string(),
       address: Joi.string()
    }),
    'officeUpd': Joi.object().keys({
        id: Joi.number().positive(),
        title: Joi.string().optional(),
        website: Joi.string().optional(),
        address: Joi.string().optional()
     }),
}

exports.check = function (schema, body) {
    if(!schemas[schema])
        return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
}