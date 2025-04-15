import React, { createContext, useState } from "react";

export const AddContext = createContext();

const AddcontextProvider = ({ children }) => {
  const [add, setAdd] = useState([]);  

  const addToCart = (product) => {
    setAdd(() => [...add, product]); 
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
