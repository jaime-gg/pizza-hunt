const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: [], 
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref:'Comment'
    }
  ]
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
