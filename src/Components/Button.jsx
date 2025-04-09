import React from 'react'
import { toast } from 'react-toastify';
const Button = () => {
  return (
    <div>
      <button onClick={()=>toast.success("Item Added")} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
    </div>
  )
}

export default Button
