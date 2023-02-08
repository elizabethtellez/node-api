const Joi = require('@hapi/joi');

module.exports.createProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  brand: Joi.string().required(),
  quantity: Joi.number().required(),
  fabric: Joi.string().required(),
  color: Joi.string().required(),
  stored: Joi.number().required()

});

module.exports.getAllProductSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string()
});

module.exports.updateProductSchema = Joi.object().keys({
  name: Joi.string(),
  price: Joi.number(),
  brand: Joi.string(),
  quantity: Joi.number(),
  fabric: Joi.string(),
  color: Joi.string(),
  stored: Joi.number(),
});
