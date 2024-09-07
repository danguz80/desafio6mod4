import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState([]);

  const getInfo = async () => {
    let response = await fetch("http://localhost:4000/api/pizzas/p001")
    let data = await response.json()
    setPizza(data)
  }

  useEffect(() => {
    getInfo()
  }, [])
  /*  if (!pizza) {
      return <div>Loading...</div>;
    } */

  return (
    <div className="card" style={{ width: '30rem', margin: '2rem auto' }}>
      <img src={pizza?.img} className="card-img-top" alt={pizza?.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza?.name}</h5>
        <p className="card-text">{pizza?.desc}</p>
        <ul className="card-text">Ingredientes:
          {pizza.ingredients ? pizza?.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>)) : null
          }
        </ul>
        <p className="card-text">
          Precio: ${pizza?.price ? pizza.price.toLocaleString() : 'N/A'}
        </p>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Pizza;
