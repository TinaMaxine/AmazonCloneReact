import React from 'react';
import '../styles/Products.css';

const Products = (props) => {
  const { products } = props;

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="card-image">
            <img src={product.image} alt={product.name} style={{ width: '220px', height: '250px' }} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
