import React, { useContext } from "react";
import { AddContext } from "../Components/Context/AddContext";
import { toast } from 'react-toastify';

const CartPages = () => {
  const { add, setAdd } = useContext(AddContext);


  const handleIncrease = (index) => {
    const newArr = [...add];
    newArr[index].quantity = (newArr[index].quantity || 1) + 1;
    setAdd(newArr);
  };


  const handleDecrease = (index) => {
    const newArr = [...add];
    if (newArr[index].quantity > 1) {
      newArr[index].quantity -= 1;
      setAdd(newArr);
    } else {
      toast.warning("Quantity cannot be less than 1");
    }
  };

  
  const handleRemove = (index) => {
    const newArr = [...add];
    newArr.splice(index, 1);
    setAdd(newArr);
    toast.error("Item is Removed");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Your Cart
      </h2>

      {add.length === 0 ? (
        <p className="text-white font-bold text-center text-5xl">No items in cart</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {add.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4 flex flex-col justify-between w-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  Price:{" "}
                  <span className="text-green-600 font-bold">
                    ${item.price}
                  </span>
                </p>

                
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => handleDecrease(index)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-4 text-lg font-bold">
                    {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => handleIncrease(index)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

              
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition w-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPages;
