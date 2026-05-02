import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);

    // Categories အလိုက် အပင် ၆ မျိုးထက်မနည်း ထည့်ထားပါတယ်
    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", cost: "$15", image: "https://example.com/snake.jpg", description: "Produces oxygen at night." },
                { name: "Spider Plant", cost: "$12", image: "https://example.com/spider.jpg", description: "Easy to care for and filters toxins." },
                { name: "Peace Lily", cost: "$18", image: "https://example.com/lily.jpg", description: "Beautiful white blooms that clean air." }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "Aloe Vera", cost: "$10", image: "https://example.com/aloe.jpg", description: "Medicinal properties and hard to kill." },
                { name: "ZZ Plant", cost: "$25", image: "https://example.com/zz.jpg", description: "Thrives in low light conditions." },
                { name: "Pothos", cost: "$14", image: "https://example.com/pothos.jpg", description: "Fast-growing trailing vine." }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    // Cart ထဲမှာ ရှိမရှိ စစ်ဆေးပြီး Button ကို Disable လုပ်ရန်
    const isPlantInCart = (plantName) => {
        return cartItems.some(item => item.name === plantName);
    };

    return (
        <div>
            {/* Navbar Component Added */}
            <nav className="navbar">
                <div className="nav-logo">Paradise Nursery</div>
                <div className="nav-links">
                    <a href="#">Plants</a>
                    <div className="cart-icon" onClick={() => setShowCart(true)}>
                        <i className="fa fa-shopping-cart"></i>
                        <span className="cart-count">{cartItems.length}</span>
                    </div>
                </div>
            </nav>

            <div className="product-listing-container">
                {plantsArray.map((categoryObj, index) => (
                    <div key={index} className="category-section">
                        <h2 className="category-title">{categoryObj.category}</h2>
                        <div className="product-grid">
                            {categoryObj.plants.map((plant, pIndex) => (
                                <div key={pIndex} className="product-card">
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <h3 className="product-name">{plant.name}</h3>
                                    <p className="product-desc">{plant.description}</p>
                                    <p className="product-price">{plant.cost}</p>
                                    
                                    {/* Button Logic: Disable and Change Label */}
                                    <button 
                                        className={`add-to-cart-btn ${isPlantInCart(plant.name) ? 'disabled' : ''}`}
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={isPlantInCart(plant.name)}
                                    >
                                        {isPlantInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
