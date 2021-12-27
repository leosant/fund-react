import React from "react";

import Products from "../../data/products";
import "./TableProduct.css"

export default (_) => { 
  return (
    <div className="Table">
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>preço</th>
        </tr>
        </thead>
        <tbody>{getProduct()}</tbody>
      </table>
    </div>
  );


  function getProduct() {
    return Products.map((product, i) => {
        return (
          <tr key={product.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>R${product.price.toFixed(2).replace(".", ",")}</td>
          </tr>
        );
      }); 
  } 
};
