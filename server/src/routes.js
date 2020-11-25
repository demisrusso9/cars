const express = require('express')
const routes = express.Router();

const CarModel = require('./models/Cars')

routes.post('/cars/insert', async (req, res) => {
   const { brand, model, year } = req.body;

   const cars = new CarModel({ brand, model, year })
   await cars.save()

   res.json({ message: 'Inserted registry successfully' })
})

routes.get('/cars/read', async (req, res) => {
   CarModel.find({}, (err, result) => {
      if (err) res.json(err)
      res.json(result)
   })
})

routes.put('/cars/update', async (req, res) => {
   const { id, brand, model, year } = req.body;

   try {
      await CarModel.findById(id, (err, carUpdated) => {
         carUpdated.brand = brand;
         carUpdated.model = model;
         carUpdated.year = Number(year);
         carUpdated.save()
      })

      res.json({ message: 'Registry renamed successfully' })
   } catch (error) {
      console.log(error);
   }
})

routes.delete('/cars/delete/:id', async (req, res) => {
   const { id } = req.params;
   
   CarModel.deleteOne({ _id: id }, (err, result) => {
      if (err) res.json({ message: 'Delete unsuccessfully' })
      res.json({ message: 'Delete successfully' })
   })
})

module.exports = routes