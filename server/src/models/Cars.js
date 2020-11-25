const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
   brand: {
      type: String,
      required: true,
   },

   model: {
      type: String,
      required: true,
   },

   year: {
      type: Number,
      required: false,
   }
});

const CarModel = mongoose.model('cars', CarSchema)

module.exports = CarModel;