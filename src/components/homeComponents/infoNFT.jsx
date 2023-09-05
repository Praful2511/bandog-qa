import React from "react";
import rectangle3 from "../../assests/demoNFT.svg";
import { PrimaryButton } from "../buttons/primaryButton";
const InfoNFT = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center md:items-center">
      <div className="container mx-4 md:mx-10 flex float-left">
        <div className="w-1/2">
          <img src={rectangle3} alt="" className="w-[605px]"></img>
        </div>
        <div className=" flex justify-between items-center m-auto ">
          <div className=" container w-[538px]">
            <div className="text-[16px] opacity-95">New NFT</div>
            <div className="mt-2 mb-8 flex  items-center">
              <div className="font-inter text-5xl font-extrabold ">
                Super Cute Dog
              </div>
              <div className="bg-[#121212] px-5 text-[15px] py-1 rounded-2xl font-inter opacity-90 ml-6 mt-2">
                Tier 1
              </div>
            </div>
            <div className="opacity-70 font-inter ">NFT Number:</div>
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
            <div className="w-full bg-[#121212] container mt-8 rounded-xl py-5  flex justify-between ">
              <div className="mx-5 flex justify-between w-full">
                <div>
                  <div className="opacity-80 mb-1">Price:</div>
                  <div>
                    <span className="text-[24px] font-inter font-extrabold mr-2 ">
                      25.6
                    </span>
                    <span className="">USD</span>
                  </div>
                </div>

                <div className="flex justify-center items-center w-52">
                   <PrimaryButton >Buy NFT </PrimaryButton>
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
