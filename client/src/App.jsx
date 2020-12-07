import React, { useState } from 'react'
import CRUD from './AppLogic'
import './App.css';

function App() {
  const { addCar, updateCar, deleteCar, setBrand, setModel, setYear, message, list, setList } = CRUD()

  const [orderASC, setOrderASC] = useState(true);

  const sortList = (property) => {
    const types = { brand: 'brand', model: 'model', year: 'year' }
    const sortProperty = types[property]

    if (orderASC) {
      setOrderASC(prev => !prev)
      setList(list.sort((a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1))
    } else {
      setOrderASC(prev => !prev)
      setList(list.sort((a, b) => a[sortProperty] < b[sortProperty] ? 1 : -1))
    }
  }

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
        <p>{message}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={_ => sortList(`brand`)}>Brand</th>
            <th onClick={_ => sortList(`model`)}>Model</th>
            <th onClick={_ => sortList(`year`)}>Year</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((car, i) =>
            <tr key={i}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>
                <button onClick={_ => updateCar(car._id)}>Rename</button>
                <button onClick={_ => deleteCar(car._id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
