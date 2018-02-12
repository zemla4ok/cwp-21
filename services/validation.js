const Joi = require('joi');

const schemas = {
    'office': Joi.object().keys({
       title: Joi.string(),
       website: Joi.string(),
       address: Joi.string()
    })
}

exports.check = function (schema, body) {
    if(!schemas[schema])
        return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
}