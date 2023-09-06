import React from 'react';
import { Link } from 'react-router-dom';
import dogone from '../assests/dogAssests/dogCardOne.png';

export const CollectionPage = (params) => {
  const dogArray = new Array(16).fill('');

  return (
    <div className="px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10 ">
      <div className="h-[210px] border bg-opacity-[0.07] bg-white">
        <h1 className="text-[49px] mt-28">NFT Collection</h1>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-4 md:mt-8">
        <div className="w-full md:w-auto md:flex-shrink-0 md:mr-4">
          <p className="md:text-lg">2,664</p>
        </div>
        <div className="w-full md:w-64 md:flex-shrink-0 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <p className="md:text-lg">Filter by:</p>
        </div>
        <div className="w-full md:w-64 md:flex-shrink-0 mt-4 md:mt-0">
          <select name="" id="" className="w-full border p-2 rounded-md">
          
          </select>
        </div>
        <div className="w-full md:w-64 md:flex-shrink-0 mt-4 md:mt-0">
          <select name="" id="" className="w-full border p-2 rounded-md">
           
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-8   mt-4 md:mt-8 border">

        {dogArray.map((item, i) => (
              <Link to="/collection/1">
          <div key={i} className="mt-5 bg-white m-auto  bg-opacity-[0.07] w-[306px] rounded-lg p-1">
            <div className=" shadow-lg p-2 rounded-lg overflow-hidden">
              <img src={dogone} alt="" className="w-full h-auto" />
            </div>
            <div className="w-fit font-[600] p-2 text-base">Tier 2</div>
            <div className="flex w-full justify-between p-2">
              <div>
                <div className="text-sm opacity-[0.7]">Available NFTs:</div>
                <div className='text-sm'>15652366</div>
              </div>
              <div>
                <div className="text-sm opacity-[0.7]">Price per NFT:</div>
                <div className="flex items-center">
                  <h3 className="text-xl font-[600]">25.6</h3>
                  <p className="pl-2 text-sm opacity-[0.7]" >USD</p>
                </div>
              </div>
            </div>
          </div></Link>
        ))}
      </div>
      <div>page</div>
      <h1>CollectionPage</h1>
      <div className="productsNav">
      
        <Link to="/collection/1/bank">bank</Link>
      </div>
    </div>
  );
};
