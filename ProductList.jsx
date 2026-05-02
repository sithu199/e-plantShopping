import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  // သာဓက အပင်စာရင်း (Plant Data)
  const plants = [
    { name: 'Snake Plant', cost: '$15', image: 'https://example.com/snake.jpg' },
    { name: 'Peace Lily', cost: '$20', image: 'https://example.com/lily.jpg' },
    { name: 'Spider Plant', cost: '$12', image: 'https://example.com/spider.jpg' },
    { name: 'Aloe Vera', cost: '$10', image: 'https://example.com/aloe.jpg' },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    alert(`${plant.name} added to cart!`);
  };

  return (
    <div className="product-list-container">
      <h1>Our Paradise Plants</h1>
      <div className="product-grid">
        {plants.map((plant, index) => (
          <div key={index} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.cost}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
