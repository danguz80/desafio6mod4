import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { cart } = useContext(CartContext); 
  const [pizzas, setPizzas] = useState([]);

  const obtenerInfo = async () => {
    let respuesta = await fetch("http://localhost:4000/api/pizzas");
    let data = await respuesta.json();
    setPizzas(data)
  }

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around mt-4">
        {cart.filter(pizza => !pizza.agregado) // Filtra las pizzas donde agregado es false
             .map((pizza) => (
          <CardPizza
            key={pizza?.id}
            id={pizza?.id}
            name={pizza?.name}
            price={pizza?.price}
            ingredients={pizza?.ingredients}
            img={pizza?.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
