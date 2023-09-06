import React from 'react'
import key from "../../assests/sectionTAF.svg";
import anchor from "../../assests/sectionTAFi.svg";
import star from "../../assests/sectionTATh.svg";
import diamond from "../../assests/sectionTAT.svg";
const FeatureSection = () => {
  return (
    <div className=' px-4 lg:px-8 3xl:px-10 pt-8 sm:pt-10 pb-10 w-full m-auto'>
        <div className="w-full m-auto bg-black ">
        <div className=" m-auto  font-inter">
          <h1 className="text-white font-sans w-fit text-[22px] md:text-[30px] lg:text-[49px]">
            Our Feature
          </h1>

          <div className=" sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4  m-auto  object-cover">
            <div className="text-white w-[300px] items-center m-auto text-center  p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 rounded-full">
                <div className="opacity-100">
                  <img
                    className="max-w-full m-auto max-h-full"
                    src={star}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[70px] items-center w-[90%]  text-[25px]  mt-2">
                Unique
              </div>
              <div className=" m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] m-auto items-center  text-center p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 rounded-full">
                <div className="opacity-100">
                  <img
                    className="max-w-full m-auto max-h-full"
                    src={key}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[70px] text-[25px] items-center mt-2">
                Ownership
              </div>
              <div className=" m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] m-auto items-center text-center p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 items-center rounded-[100%]">
                <div className="opacity-100   ">
                  <img
                    className="max-w-full m-auto max-h-full"
                    height={"100%"}
                    src={anchor}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[70px] items-center w-[90%] text-[25px] mt-2">
                Digitally Scarce Resource
              </div>
              <div className="  m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] m-auto items-center text-center p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 rounded-full object-fill">
                <div className="opacity-100">
                  <img
                    className="max-w-full m-auto max-h-full"
                    src={diamond}
                    alt=""
                  />
                </div>
              </div>
              <div className=" h-[70px] items-center w-[90%]  text-[25px] mt-2">
                Indivisible
              </div>
              <div className=" m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection