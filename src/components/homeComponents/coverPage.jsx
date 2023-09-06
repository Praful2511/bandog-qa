import React from "react";
import star1 from "../../assests/StarOne.svg";
import star2 from "../../assests/StarTwo.svg";
import arrow1 from "../../assests/ButtonArrow.svg";
import group43 from "../../assests/CoverPageGroup.svg";

const CoverPage = () => {
  return (
   
      <div className="w-full flex flex-col md:flex-row md:justify-between  px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-20 md:mt-20  mt-4">
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

        {/* <div className="w-full md:w-2/5 2xl:1/5 mt-8 md:mt-0  md:mb-5 md:flex">
          <img src={group43} alt="" className="w-full" />
        </div> */}
        <div className="flex justify-center items-center md:justify-end xl:justify-end md:mt-0 mt-10">
          
          <img src={group43} alt="" className="w-4/5 md:w-4/5 2xl:w-4/5" />
        </div>
        
      </div>
   
  );
};

export default CoverPage;
