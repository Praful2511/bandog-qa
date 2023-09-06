import React from "react";
import rectangle3 from "../../assets/demoNFT.svg";
import { PrimaryButton } from "../buttons/primaryButton";
const InfoNFT = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between  px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-20 md:mt-20  mt-4 ">
      <div className="w-full md:flex md:flex-row flex-col justify-between  ">
      <div className=" flex justify-between items-center">
        <img src={rectangle3} alt="" className=" "></img>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="w-full md:w-1/2 lg:w-[538px] mt-10">
          <div className="text-[16px] opacity-95">New NFT</div>
          <div className="mt-2 mb-8 flex items-center">
            <div className="font-inter text-3xl md:text-5xl font-extrabold">
              Super Cute Dog
            </div>
            <div className="bg-[#121212] px-3 md:px-5 text-[15px] py-1 rounded-2xl font-inter opacity-90 ml-4 md:ml-6 mt-2">
              Tier 1
            </div>
          </div>
          <div className="opacity-70 font-inter">NFT Number:</div>
          <div className="font-inter text-[16.5px]">015652366</div>
          <div className="mt-8 font-inter">
            Lorem ipsum dolor sit amet consectetur. Quam integer aliquam odio
            urna leo a imperdiet et. Tristique id nec sed faucibus. Faucibus
            aenean enim donec neque diam amet sem iaculis. Venenatis ornare
            fringilla egestas turpis nibh lobortis volutpat.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Quam integer aliquam odio
            urna leo a imperdiet et. Tristique id nec sed faucibus.
          </div>
          <div className="w-full bg-[#121212] container mt-8 rounded-xl md:py-5 py-3 flex flex-col md:flex-row justify-between md:px-0 px-5 ">
            <div className="md:mx-5 flex  md:flex-row justify-between w-full">
              <div className="mt-4 md:mt-0 md:mr-4">
                <div className="opacity-80 mb-1">Price:</div>
                <div className="flex items-center">
                  <span className="text-[18px] md:text-[24px] font-inter font-extrabold mr-2">
                    25.6
                  </span>
                  <span className="">USD</span>
                </div>
              </div>

              <div className="flex justify-center items-center w-44 md:w-52 mt-4 md:mt-0 ">
                <PrimaryButton>Buy NFT</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default InfoNFT;
