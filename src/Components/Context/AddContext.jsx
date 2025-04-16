import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';
export const AddContext = createContext();

const AddcontextProvider = ({ children }) => {
  const [add, setAdd] = useState([]);  

  const addToCart = (product) => {
    const isAdded = add.find((data) => data.id === product.id); 

    if (!isAdded) {
      setAdd(() => [...add, product]); 
        toast.success("Item Added to Cart!");  
    } 
    else {
      toast.error("Already Added in cart")
    }

  
  };

  const requiredVal = {
    add,       
    setAdd,    
    addToCart,  
  };

  return (
    <AddContext.Provider value={requiredVal}>
      {children}
    </AddContext.Provider>
  );
};

export default AddcontextProvider;
