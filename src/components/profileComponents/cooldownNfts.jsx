import dogone from "../../assests/dogAssests/dogCardOne.png";

export const CooldownNfts = () => {
  const dogArray = new Array(8).fill(""); 

  return (
    <div className="flex flex-wrap justify-between  gap-8 mt-4 md:mt-8">
      {dogArray.map((item, i) => (
        <div className="mt-5  w-[306px] bg-white-shade-10   rounded-lg p-1 relative">
          <div className="absolute inset-0 flex justify-between bg-gradient-to-b from-black to-transparent opacity-70 h-24">
            <div className=" ml-5 mt-5 text-sm">
              Remaining Time
            </div>
            <div className="text-[30px] mr-6 mt-2 ">
              5d
            </div>
          </div>

          <div className="shadow-lg p-1 rounded-lg overflow-hidden">
            <img src={dogone} alt="" className="w-full h-auto" />
          </div>
          <div className="w-fit font-[600] p-2 text-base">Tier 2</div>
          <div className="flex w-full justify-between p-2">
            <div>
              <div className="text-sm opacity-[0.7]">Available NFTs:</div>
              <div className="text-sm">15652366</div>
            </div>
            <div>
              <div className="text-sm opacity-[0.7]">Price per NFT:</div>
              <div className="flex items-center">
                <h3 className="text-xl font-[600]">25.6</h3>
                <p className="pl-2 text-sm opacity-[0.7]">USD</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
