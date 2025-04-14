import React, { createContext, useState } from "react";

export const AddContext = createContext();

const AddcontextProvider = ({ children }) => {
  const [add, setAdd] = useState(false);

  const requiredVal = {
    add,
    setAdd,
  };

  return (
    <AddContext.Provider value={requiredVal}>
      {children}
    </AddContext.Provider>
  );
};

export default AddcontextProvider;
