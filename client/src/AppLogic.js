import { useState, useEffect } from 'react'
import Axios from 'axios'

const CRUD = () => {
   const [brand, setBrand] = useState('')
   const [model, setModel] = useState('')
   const [year, setYear] = useState()

   const [message, setMessage] = useState('')
   const [list, setList] = useState([])

   const addCar = () => {
      Axios.post('http://localhost:3003/cars/insert', {
         brand, model, year
      }).then(res => {
         setMessage(res.data.message)
         setList([...list, { brand, model, year }])
      })
   }

   const updateCar = (id) => {
      const brand = prompt('Enter new Brand: ')
      const model = prompt('Enter new Model: ')
      const year = prompt('Enter new Year: ')

      Axios.put('http://localhost:3003/cars/update', {
         id, brand, model, year
      }).then(res => {
         setList(list.map(car =>
            car._id === id ?
               { _id: id, brand, model, year } : car))

         setMessage(res.data.message)
      })
   }

   const deleteCar = (id) => {
      Axios.delete(`http://localhost:3003/cars/delete/${id}`)
         .then(res => {
            setMessage(res.data.message)
            setList(list.filter(car => id !== car._id))
         })
   }

   useEffect(() => {
      Axios.get('http://localhost:3003/cars/read').then(res => setList(res.data))
   }, [])

   return { addCar, updateCar, deleteCar, setBrand, setModel, setYear, message, list, setList }
}

export default CRUD;