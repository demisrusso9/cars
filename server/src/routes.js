const express = require('express')
const routes = express.Router();

const CarModel = require('./models/Cars')

routes.post('/insert', async (req, res) => {
   const { brand, model, year } = req.body;

   const cars = new CarModel({ brand, model, year })

   await cars.save()
   res.json({ message: 'Inserted successfully' })
})

routes.get('/read', async (req, res) => {
   CarModel.find({}, (err, result) => {
      if (err) res.send(err)
      res.send(result)
   })
})

module.exports = routes