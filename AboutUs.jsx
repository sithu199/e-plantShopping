import React from 'react';
import './AboutUs.css'; // လိုအပ်လျှင် CSS ဖိုင်ချိတ်ရန်

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About e-plantShopping</h1>
      <p className="about-us-description">
        Welcome to **e-plantShopping**, your premier destination for high-quality houseplants. 
        Our mission is to bring nature closer to your living space by providing healthy, 
        beautiful plants delivered right to your doorstep.
      </p>
      
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          We believe that everyone should have access to the joy and health benefits of keeping plants. 
          Our team of experts carefully selects each plant to ensure they meet our high standards of 
          quality and sustainability.
        </p>
      </section>

      <section className="about-us-story">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Quality Selection:</strong> We offer a variety of rare and common plants.</li>
          <li><strong>Expert Care:</strong> Each plant comes with detailed care instructions.</li>
          <li><strong>Eco-Friendly:</strong> We use sustainable packaging for all our deliveries.</li>
        </ul>
      </section>
      
      <p className="about-us-closing">
        Thank you for choosing e-plantShopping. Let's make the world greener, one home at a time!
      </p>
    </div>
  );
};

export default AboutUs;
