 import whitlogo  from "../../assets/logoWhite.svg"
 import insta from "../../assests/Group 20.svg";
 import twiteer from "../../assests/Group 21.svg";
 import facebook from "../../assests/Group 22.svg";
 import linkdin from "../../assests/Group 23.svg";
export const Footer = (params) => {
  
  return (
    <div className="p-7">
      <div className="bg-[#DFE42F] m-auto h-[2px] "></div>
      <div className="flex items-center  justify-between mt-10">
      <div className="flex items-center w-2/6 justify-between">
        <div className="flex items-center">
          <img src={whitlogo} alt="" />
          <h1 className="text-[39px] font-[700] ml-2  ">BANDOG</h1>
        </div>
        <div>HOME</div>
        <div>NFT collection</div>
      </div>
      <div className="flex justify-between w-2/6">
        <div>
          <img src={insta} alt="" />
        </div>
        <div><img src={facebook} alt="" /></div>
        <div><img src={twiteer} alt="" /></div>
        <div><img src={linkdin} alt="" /></div>
      </div>
    </div>
    </div>
  );
};
