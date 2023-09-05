 import whitlogo  from "../../assests/logoWhite.svg"
 import insta from "../../assests/instaLogo.svg";
 import twiteer from "../../assests/twiteerLogo.svg";
 import facebook from "../../assests/facebookLogo.svg";
 import linkdin from "../../assests/linkdinLogo.svg";
export const Footer = (params) => {
  
  return (
    <div className="p-7">
      <div className="bg-[#DFE42F] m-auto h-[2px] "></div>
      <div className="lg:flex items-center justify-between mt-10 ">
      <div className="md:flex lg:flex items-center md:w-[70%] m-auto sm:m-auto lg:m-0  lg:w-[40%] justify-between">
        <div className="flex items-center">
          <img src={whitlogo} alt="" />
          <h1 className="text-[39px] font-[700] ml-2  ">BANDOG</h1>
        </div>
        <div className="ml-12  text-sm font-[500]">HOME</div>
        <div className="ml-12 text-sm font-[500]">NFT collection</div>
      </div>
      <div className="flex justify-between md:w-3/6 mt-5 sm:w-full md:m-auto sm:m-auto lg:m-0 lg:w-2/6">
        <div>
          <img src={insta} alt="error" />
        </div>
        <div><img src={facebook} alt="error" /></div>
        <div><img src={twiteer} alt="error" /></div>
        <div><img src={linkdin} alt="error" /></div>
      </div>
    </div>
    </div>
  );
};
