
import React from 'react'
import dogone from "../../assets/dogassests/dogCardOne.png";
import dogtwo from "../../assets/dogassests/dogCardTwo.png";
import dogthree from "../../assets/dogassests//dogCardThree.png";
const CollectionSection = () => {
  return (
    <div className='px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10 '>
        <div className="bg-black text-white">
        <div className=" m-auto">
          <h1 className="w-fit text-md md:text-xl lg:text-[49px]">Our Collection</h1>
          <div className="grid gap-7 m-auto mt-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="  bg-[#171717]  rounded-[20px] m-auto p-3">
              <div className="w-full m-auto  ">
                <img className="w-full" src={dogone} alt="" />
              </div>
              <div className="w-fit font-[600] p-2 text-[25px]">Tier1</div>
              <div className="flex w-full justify-between p-2">
                <div>
                  <div className='text-base opacity-[0.7]'>Available NFTs:</div>
                  <div>15652366</div>
                </div>
                <div>
                  <div className='text-base opacity-[0.7]'>Price per NFT:</div>
                  <div className='flex items-center'><h3 className='text-[31px] font-[600]'>25.6</h3><p className='pl-2'> usd</p></div>
                </div>
              </div>
            </div>
            <div className="  bg-[#171717] rounded-[20px] m-auto p-3">
              <div className="w-full m-auto  ">
                <img className="w-full" src={dogtwo} alt="" />
              </div>
              <div className="w-fit font-[600] p-2 text-[25px]">Tier 2</div>
              <div className="flex w-full justify-between p-2">
                <div>
                  <div className='text-base opacity-[0.7]'>Available NFTs:</div>
                  <div>15652366</div>
                </div>
                <div>
                  <div className='text-base opacity-[0.7]'>Price per NFT:</div>
                  <div className='flex items-center'><h3 className='text-[31px] font-[600]'>25.6</h3><p className='pl-2'> usd</p></div>
                </div>
              </div>
            </div>
           
            <div className="  bg-[#171717] rounded-[20px] m-auto p-3">
              <div className="w-full m-auto  ">
                <img className="w-full" src={dogthree} alt="" />
              </div>
              <div className="w-fit font-[600] p-2 text-[25px]">Tier 3</div>
              <div className="flex w-full justify-between p-2">
                <div>
                  <div className='text-base opacity-[0.7]'>Available NFTs:</div>
                  <div>15652366</div>
                </div>
                <div>
                  <div className='text-base opacity-[0.7]'>Price per NFT:</div>
                  <div className='flex items-center'><h3 className='text-[31px] font-[600]'>25.6</h3><p className='pl-2'> usd</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionSection