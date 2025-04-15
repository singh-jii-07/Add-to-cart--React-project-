import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
// import { FaHome } from "react-icons/fa";
import { AddContext } from "./Context/AddContext";

const Navbar = () => {
  const {add}=useContext(AddContext);
  const [Block , setBlock] = React.useState(false);
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
  const Haldeldisplay=(()=>{
   setBlock(!Block)
  })

  return (
    <nav className="bg-white relative shadow-xl p-4 flex justify-around items-center">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        MiniShop
      </div>
      <ul className={`${Block?"flex":"hidden"} space-x-4`}>
        {cardData.map((card) => (
          <li key={card.id} className="flex ">
            <Link
              to={card.link}
              className="text-black hover:text-blue-600 transition font-semibold flex align-middle justify-center space-x-1"
            >
             
              {card.name === "Cart" && <FaCartShopping className="text-lg mt-1 mr-1" />}
             
              {/* {card.name === "Product List" && <FaHome className="text-lg mt-1 mr-1" />} */}
              {card.name}
            </Link>
            {card.name === "Cart" && add.length > 0 && (
              <span className="text-black font-medium">
                ({add.length})
              </span>
            )}
          </li>
          
        ))}
        
      </ul>

      <FaBars onClick={Haldeldisplay} className="block lg:hidden md:hidden  text-xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;
