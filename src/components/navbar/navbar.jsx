
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
export const Navbar = (params) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    
    <div className=" w-full px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10 items-center flex h-[82px]">
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="flex  font-bold"> 
          <img src={logo} className="object-fill" alt="logo" />
          <h1 className="text-[#DFE42F] font-bold text-[28px] ml-3">BANDOG</h1>

        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <span className=" hover:text-gray-300">Home</span>
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <span className=" hover:text-gray-300">NFT collection</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <span className=" hover:text-gray-300">My NFT</span>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
          >
          <span className=" hover:text-gray-300">Login</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className=" hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


