import AddCart from "./AddCart";
import { useState } from "react";
import { Wiget } from "./Wiget";
import { Gadget } from "./Gadget";
import { CartSummary } from "./CartSummary";

function App() {
  const [items, setItems] = useState([]);

  return (
    <AddCart.Provider value={{ items, setItems }}>
      <Wiget />
      <Gadget />
      <CartSummary />
    </AddCart.Provider>
  );
}

export default App;
