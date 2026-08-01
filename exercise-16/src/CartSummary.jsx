import React, { useContext } from "react";
import AddCart from "./AddCart";

export const CartSummary = () => {
  const { items, setItems } = useContext(AddCart);

  const Remove = (id) => {
    const newUpdate = items.filter((item) => item.id !== id);
    setItems(newUpdate);
  };

  const TotalItems = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <h1>CartSummary</h1>
      <h3>Total Items: {TotalItems} </h3>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> - ${item.price}
                <button onClick={() => Remove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>this cart is empty</p>
      )}
    </div>
  );
};
