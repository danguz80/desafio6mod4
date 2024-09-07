import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext); // Usando el contexto para obtener el carrito

  // Incrementar la cantidad de una pizza en el carrito
  const increaseQuantity = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  // Decrementar la cantidad de una pizza en el carrito y cambiar 'agregado' a false si llega a 0
  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza => {
      if (pizza.id === id) {
        const newQuantity = pizza.quantity - 1;
        return newQuantity > 0 
          ? { ...pizza, quantity: newQuantity } 
          : { ...pizza, agregado: false, quantity: 0 };
      }
      return pizza;
    }));
  };

  // Calcular el total del carrito
  const total = cart
    .filter(pizza => pizza.agregado) // Solo las pizzas que están agregadas
    .reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  // Mostrar las pizzas agregadas al carrito (agregado: true)
  return (
    <div className="container mt-4 d-flex flex-column">
      <h3>🛒 Carrito de Compras</h3>
      {cart.filter(pizza => pizza.agregado).length > 0 ? ( // Filtra las pizzas agregadas
        <>
          <ul className="list-group">
            {cart.filter(pizza => pizza.agregado).map((pizza) => ( // Mapea las pizzas agregadas
              <li key={pizza.id} className="list-group-item container text-center">
                <div className='row align-items-center'>
                  <img className='col' src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
                  <div className='col'>{pizza.name}</div>
                  <div className='col'>${pizza.price.toLocaleString()}</div>
                  <div className='col'>
                    <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-outline-danger">-</button>
                    <span className="mx-2">{pizza.quantity}</span>
                    <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-outline-success">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-4">Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-primary mt-3">Pagar</button>
        </>
      ) : (
        <p className="text-center">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
