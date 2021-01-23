import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HttpRequestComponent.css';

function Regular() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    const response = await axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .catch((err) => console.error(err));
    setProducts(response.data);
  }

  function onClickFunction(event) {
    console.log(
      '🚀 ~ file: HttpRequestComponent.jsx ~ line 20 ~ onClickFunction ~ event',
      event.target
    );
  }

  return (
    <div>
      <h1>===============http==============</h1>
      {products ? (
        <div className="HttpRequestComponent">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="product"
                onClick={onClickFunction}
              >
                <div>id: {product.id}</div>
                <div>userId: {product.userId}</div>
                <div>title: {product.title}</div>
                <div>body: {product.body}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      <h1>===============http==============</h1>
    </div>
  );
}

export default Regular;
