import React from "react";
import star1 from "../../assets/StarOne.svg";
import star2 from "../../assets/StarTwo.svg";
import coverpageimage2 from "../../assets/coverPageImage2.svg";
import arrow from "../../assets/ButtonArrow.svg";
import { SecondaryButton } from "../buttons/secondaryButton";

const SecondCoverPage = () => {
  return (
    <div className="w-full ">
      <div className=" flex flex-col w-full md:mb-80 mb-52  ">
        <div className="flex justify-center md:mt-5 mt-1 ">
          <div className="w-[772px] font-inter text-3xl md:text-5xl lg:text-6xl font-extrabold relative">
            <span className="flex items-center justify-center text-center md:leading-[4.5rem] ">
              Discover Rare Collections of Arts & NFTs
            </span>
            <span className="absolute md:left-[68%] lg:left-[77%] top-1/2 mt-5 transform -translate-y-1/2">
              <img src={star1} alt="" className="sm:w-5 w-0" />
            </span>
            <span className="absolute md:left-[71%] lg:left-[79%] top-1/2 mt-4 transform -translate-y-1/2">
              <img src={star2} alt="" className="sm:w-3 w-0" />
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-5  ">
          <span className=" w-[572px] md:text-base text-xs text-center opacity-80    ">
            Lorem ipsum dolor sit amet consectetur. Quam integer aliquam odio
            urna leo a imperdiet et. Tristique id nec sed faucibus.
          </span>
        </div>
        <div className="w-full flex justify-center h-[56px] mb-20 md:mb-5 ">
          <div className="w-[264px] mt-[20rem] 2xl:mt-[20rem]   ">
            <SecondaryButton height={56}>
              <span className="text-[#DFE42F] font-light flex ">
                View Collection <img src={arrow} alt="" className="ml-3"></img>{" "}
              </span>
            </SecondaryButton>
          </div>
        </div>
        <div className=" w-full absolute sm:mt-36  lg:mt-32 xl:mt-44 2xl:mt-20  mt-52 ">
          <img src={coverpageimage2} alt="" className="w-full max-h-[600px]  "></img>
        </div>
      </div>
    </div>
  );
};

export default SecondCoverPage;
