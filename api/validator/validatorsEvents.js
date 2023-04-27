import Joi from "joi";

const schemaCreateEvent = Joi.object().keys({
  participants_number : Joi.number().integer().min(1).max(100).required(),
  category: Joi.string().alphanum().min(3).max(30),//Joi.array().items
  address : Joi.string().min(3).max(30).required(),
  description: Joi.string().min(0).max(300),
  image_url: Joi.string().alphanum().min(3),
  date: Joi.date().required(),
  name: Joi.string().min(3).max(30).required(),
  organizerId: Joi.number().integer().required(),
});

const schemaUpdateEvent = Joi.object().keys({
  participants_number : Joi.number().integer().min(1).max(100).required(),
  category: Joi.string().alphanum().min(3).max(30),//Joi.array().items
  address : Joi.string().min(3).max(30).required(),
    description: Joi.string().min(0).max(300),
    image_url: Joi.string().min(3),
    date: Joi.date().required(),
    name: Joi.string().min(3).max(30).required(),
});

// verify that an objetc is an id
const schemaId = Joi.number().integer().required();


function validate(validation, res) {
  if (validation.error) {
    res.status(400).json({
      message: "Bad request",
      error: validation.error,
    });
    return null;
  }
  return validation.value;
}

export { schemaCreateEvent, schemaUpdateEvent,schemaId ,validate};