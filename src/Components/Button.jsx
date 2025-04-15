import React, { useContext } from 'react';
import { AddContext } from './Context/AddContext';  
import { toast } from 'react-toastify';

const Button = ({ product }) => {
  const { addToCart } = useContext(AddContext);  

  const handleAddToCart = () => {
    toast.success("Item Added to Cart!");  
    addToCart(product);  
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}  
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
