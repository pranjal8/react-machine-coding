import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const newArray = products.map((item) => {
      if (item.id === productId) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    setProducts(newArray);
  }

  function handleDecreaseClick(productId) {
    const updatedCart = products
      .map((item) => {
        if (item.id === productId) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.count > 0);

    setProducts(updatedCart);
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li
            style={{
              display: "flex",
              alignContent: "center",
              padding: "4px",
              gap: "4px",
            }}
            key={product.id}
          >
            {product.name} <b>({product.count})</b>
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
            <button onClick={() => handleDecreaseClick(product.id)}>–</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
