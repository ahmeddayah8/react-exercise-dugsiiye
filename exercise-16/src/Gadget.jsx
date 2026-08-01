import React from "react";
import { useContext } from "react";
import AddCart from "./AddCart";
import { useState } from "react";

export const Gadget = () => {
  const { items, setItems } = useContext(AddCart);

  const [name, setName] = useState("Gadget");
  const [price, setPrice] = useState(55);

  const addItem = () => {
    const newItem = {
        id: Date.now(),
        name: name,
        price: price,
        quantity: 1
    };
    setItems((prev) => [...prev,newItem])
  };

  return (
    <div>
      <h3>Gadget</h3>
      <p>Price: ${price}</p>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
};
