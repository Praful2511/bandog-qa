
  import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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
    <div className="w-full">
      <div class="w-full bg-black justify-between p-2 items-center flex h-[82px] ">
        <div className="w-full m-auto  flex justify-between ">
          <div class=" lg:w-1/12 w-2/6 ml-7 flex items-center">
            <img src={logo} class="object-fill" alt="logo" />
            <h1 className="text-[#DFE42F] font-bold text-[28px] ml-3">BANDOG</h1>
          </div>
 
          
         {isOpen? <div className="p-2 w-[150px] mt-[61px] font-inter ml-0 text-white absolute bg-black text-center ">
            
            <div className="mt-1">Home</div>
           
            <div className="mt-1">NFT collection</div>
          
            <div className="text-[#DFE42F] mt-1 underline flex m-auto w-fit underline-offset-8">
              <div>login</div>
              <div>/</div>
              <div>Signup</div>
            </div>
          </div>:<div className= "hidden lg:flex mr-10  text-white w-[30%] justify-between items-center">
            <div></div>
            <div>Home</div>
            <div>NFT collection</div>
            <div className="text-[#DFE42F] underline flex underline-offset-8">
              <div>login</div>
              <div>/</div>
              <div>Signup</div>
            </div>
          </div>}
          <div className="p-3 block sm:flex lg:hidden" onClick={handleNav}>
            {!isOpen ? (
              <HiMenuAlt3 size={20} color="white" />
            ) : (
              <AiOutlineClose size={20} color="white" />
            )}
          </div>
        </div>
      </div>
     
        
    </div>
  );
};


