import React from "react";
import star1 from "../../assests/Star 1.svg";
import star2 from "../../assests/Star 2.svg";
import arrow1 from "../../assests/Arrow 1.svg";
import group43 from "../../assests/Group 43.svg";

const CoverPage = () => {
  return (
    <div className="bg-black text-white  flex justify-center ">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:mt-16 ">
        <div className="w-full lg:w-[752px] md:w-[600px] text-center md:text-left mb-6">
          <div className="font-inter text-3xl md:text-5xl lg:text-6xl font-extrabold mb-10 relative">
            <span className="leading-10 ">
              Discover Rare Collections of Arts & NFTs
              <span className="absolute   top-1/2 transform -translate-y-1/2 float-right lg:mt-12 xl:mt-12 md:mt-10 ml-2  ">
                <img src={star1} alt="" className="sm:w-5 w-0" />
              </span>
              <span className="absolute  top-1/2 transform -translate-y-1/2 float-right  lg:mt-12  xl:mt-12 md:mt-10 ml-7   ">
                <img src={star2} alt="" className="sm:w-3 w-0" />
              </span>
            </span>
          </div>

          <div className="text-base md:text-lg opacity-90 my-10 ">
            Lorem ipsum dolor sit amet consectetur. Quam integer aliquam odio
            urna leo a imperdiet et. Tristique id nec sed faucibus.
          </div>
          <button className="bg-[#191919] w-full md:w-[270px] h-12 md:h-16 rounded-lg text-[10px] md:text-base font-inter text-[#DFE42F] opacity-90 transition-all duration-300 ease-in-out hover:bg-[#282828] hover:opacity-100 flex justify-center items-center border-none ">
            <span>View Collection</span>
            <img
              src={arrow1}
              alt="arrow"
              className="sm:ml-6 ml-4 w-6 sm:w-10"
            />
          </button>
        </div>

        <div className="w-full md:w-2/5 2xl:1/5 mt-8 md:mt-0  md:mb-5 mb-5">
          <img src={group43} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
