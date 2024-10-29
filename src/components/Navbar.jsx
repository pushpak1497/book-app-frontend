import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "CheckOut",
    href: "/checkout",
  },
];
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-6 shadow-sm bg-white">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative w-70 sm:w-80 space-x-2 flex items-center sm:px-8 px-3 ">
            <IoSearchSharp className="absolute inline-block mx-3" />
            <input
              type="text"
              placeholder="what are you looking for?"
              className="bg-[#eaeaea] w-full py-2 md:px-7 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center space-x-5">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className={`md:h-9 md:w-9 xs:h-6 xs:w-40  sm:size-9 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500 " : ""
                    }`}
                  />
                </button>

                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 w-full text-left text-sm hover:bg-gray-100 cursor-pointer"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary px-6 py-2 flex items-center rounded-md"
          >
            <HiOutlineShoppingCart className="size-4" />
            <span className="text-md sm:ml-1 font-semibold">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
