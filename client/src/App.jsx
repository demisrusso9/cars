import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css';

function App() {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState()

  const [message, setMessage] = useState('')
  const [list, setList] = useState([])

  const addCar = () => {
    Axios.post('http://localhost:3003/insert', {
      brand, model, year
    }).then(res => setMessage(res.data.message))
  }

  useEffect(() => {
    Axios.get('http://localhost:3003/read')
      .then(res => setList(res.data))
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="inputs">
          <div className="input-block">
            <label htmlFor="brand">Car Brand:</label>
            <input id="brand" type="text" onChange={e => setBrand(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="model">Car Model:</label>
            <input id="model" type="text" onChange={e => setModel(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="year">Car Year:</label>
            <input id="year" type="number" onChange={e => setYear(e.target.value)} />
          </div>
        </div>

        <button className="send" onClick={addCar}>Send</button>
      </div>

      <div className="messages">
        {message}
      </div>

      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {list.map((car, i) =>
            <tr key={i}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <button>Rename</button>
              <button>Delete</button>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
