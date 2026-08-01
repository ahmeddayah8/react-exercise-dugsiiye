import React, { useContext } from "react";
import AddCart from "./AddCart";
import { useState } from "react";

export const Wiget = () => {
  const { items, setItems } = useContext(AddCart);
  const [name, setName] = useState("Widget");
  const [price, setPrice] = useState(99.9);
  const addCart = () => {
    const newItem = {
      id: Date.now(),
      name: name,
      price: price,
      quantity:1
    };
    setItems((prev) => [...prev, newItem]);
  };
  return (
    <div>
      <h3>Widget</h3>
      <p>price: ${price}</p>
      <button onClick={addCart}>Add to cart</button>
    </div>
  );
};
