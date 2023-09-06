import dogone from "../../assets/dogassests/dogCardOne.png";
export const MyNfts = () => {
  const dogArray = new Array(8).fill("");

  return (
    <div className="flex flex-wrap justify-between  gap-8 mt-4 md:mt-8 ">
      {dogArray.map((item, i) => (
        <div className="mt-5 bg-white-shade-10  bg-opacity-[0.07] w-[306px] rounded-lg p-1">
          <div className="shadow-lg p-1 rounded-lg overflow-hidden">
            <img src={dogone} alt="" className="w-full h-auto" />
          </div>
          <div className="w-fit font-[400] p-2 text-base">Tier 2</div>
          <div className="flex w-full justify-between p-2">
            <div>
              <div className="text-sm opacity-[0.6]">Available NFTs:</div>
              <div className="text-sm mt-2">15652366</div>
            </div>
            <div>
              <div className="text-sm opacity-[0.7]">Price per NFT:</div>
              <div className="flex items-center">
                <h3 className="text-xl font-[600] mt-2">25.6</h3>
                <p className="pl-2 text-sm opacity-[0.7] mt-3 ">USD</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
