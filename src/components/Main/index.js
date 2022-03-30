import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [addedproducts, setAddedProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    console.log('prod', addedproducts);
  }, [addedproducts]);

  const handleAddProduct = (produsul) => {
    const newProdus = {
      ...produsul,
      quantity: 1,
    };
    setAddedProducts([...addedproducts, { ...newProdus }]);
  };

  return (
    <div className="App">
      <table border="1">
        <th>Id</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category.name}</td>
            <td>{product.price}</td>
            <td
              onClick={() => {
                handleAddProduct(product);
              }}
            >
              +
            </td>
          </tr>
        ))}
      </table>
      <h1>Cart</h1>
      <div>
        <table id='myTable'>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          {addedproducts.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.category.name}</td>
              <td>{element.quantity}</td>
              <td>{element.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
