import { useState } from "react";

function Cart() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: crypto.randomUUID(),
        name: productName,
        price: productPrice,
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");

      console.log(newProduct);
    }
  };

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <>
      <div>
        <h1>simple shoping cart</h1>
        <h2>Add a product</h2>
        <input
          type="text"
          placeholder="product name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />

        <button onClick={handleAddProduct}>Add to cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h2>Product in cart</h2>
          <ul>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <div>
                    Quantity:
                    <button onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                  </div>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </>
  );
}

export default Cart;
