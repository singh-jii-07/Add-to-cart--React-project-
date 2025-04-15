import React, { useContext } from "react";
import { AddContext } from "../Components/Context/AddContext";

const CartPages = () => {
  const { add } = useContext(AddContext);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Your Cart
      </h2>

      {add.length === 0 ? (
        <p className="text-white font-bold text-center text-9xl ">No items in cart</p>
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
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  Price:
                  <span className="text-green-600 font-bold">
                    ${item.price}
                  </span>
          
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPages;
