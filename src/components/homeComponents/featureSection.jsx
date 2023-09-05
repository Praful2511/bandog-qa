import React from 'react'
import diamond from "../../assests/sectionTAF.svg";
import star from "../../assests/sectionTAFi.svg";
import key from "../../assests/sectionTAO.svg";
import anchor from "../../assests/sectionTAT.svg";
const FeatureSection = () => {
  return (
    <div className='borderw-[95%]'>
        <div className="w-full  bg-black ">
        <div className=" m-auto p-2  font-inter">
          <h1 className="text-white font-sans w-fit  ml-2 text-[22px] md:text-[30px] lg:text-[49px]">
            Our Feature
          </h1>

          <div className=" sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-10">
            <div className="text-white w-[300px] items-center  p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 rounded-full">
                <div className="opacity-100">
                  <img
                    className="max-w-full m-auto max-h-full"
                    src={star}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[70px] items-center  text-[25px] text-center mt-2">
                Unique
              </div>
              <div className="w-[90%] m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] items-center  p-4">
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
              <div className=" w-[90%] m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] items-center  p-4">
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
              <div className="h-[70px] items-center text-[25px] mt-2">
                Digitally Scarce Resource
              </div>
              <div className=" w-[90%] m-auto opacity-[0.7] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Quam integer aliquam
                odio urna leo a imperdiet
              </div>
            </div>
            <div className="text-white w-[300px] items-center  p-4">
              <div className="bg-white w-[172px] h-[172px] bg-opacity-[0.07] m-auto p-10 rounded-full object-fill">
                <div className="opacity-100">
                  <img
                    className="max-w-full m-auto max-h-full"
                    src={diamond}
                    alt=""
                  />
                </div>
              </div>
              <div className=" h-[70px] items-center text-[25px] mt-2">
                Indivisible
              </div>
              <div className=" w-[90%] m-auto opacity-[0.7] text-[16px]">
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