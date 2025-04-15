import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const url = "https://dummyjson.com/products?limit=20";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-blue-600 animate-pulse">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">MiniShop Products</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-screen object-cover rounded-t-xl hover:scale-110 transition-transform duration-500 bg-slate-200 "
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-700 font-medium mb-4">
                Price: <span className="text-green-600 font-bold">${product.price}</span>
              </p>
              <Button product={product} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
