import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const cardData = [
    {
      id: 1,
      name: "Product List",
      link: "/",
    },
    {
      id: 2,
      name: "Cart",
      link: "/cart",
    },
  ];

  return (
    <nav className="bg-white relative shadow-xl p-4 flex justify-around items-center">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        MiniShop
      </div>
      <ul className="flex space-x-4">
        {cardData.map((card) => (
          <li key={card.id}>
            <Link
              to={card.link}
              className="text-black hover:text-blue-600 transition font-semibold"
            >
              {card.name}
            </Link>
          </li>
        ))}
      </ul>

      <FaBars />
    </nav>
  );
};

export default Navbar;
