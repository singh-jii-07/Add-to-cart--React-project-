import React, { useContext } from 'react';
import { AddContext } from './Context/AddContext';  


const Button = ({ product,label }) => {
  const { addToCart } = useContext(AddContext);  

  const handleAddToCart = () => {
   
    // console.log(product);
    addToCart(product);  
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}  
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full"
      >
      {label}
      </button>
    </div>
  );
};

export default Button;
