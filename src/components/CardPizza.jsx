import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {

  const { cart, setCart } = useContext(CartContext);

  const addCart = (id) => {
    const newCart = cart.map(pizza => {
      if (pizza.id === id) {
        return {
          ...pizza,
          agregado: true,
          quantity: pizza.quantity ? pizza.quantity + 1 : 1 // Si no tiene 'quantity', empieza en 1
        };
      }
      return pizza;
    });
    setCart(newCart);
  };


  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <ul className="card-text text-center fw-lighter fs-5">Ingredientes:
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="card-text text-center fw-bolder fs-4">Precio: ${price.toLocaleString()}</p>
        <div className='position-relative mb-3 pb-4'>
          <button className="btn btn-outline-dark position-absolute top-0 start-0">Ver más 👀</button>
          <button onClick={() => addCart(id)} className="btn btn-dark position-absolute top-0 end-0">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
