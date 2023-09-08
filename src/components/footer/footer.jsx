 import whitlogo  from "../../assets/logoWhite.svg"
 import insta from "../../assets/instaLogo.svg";
 import twiteer from "../../assets/twiteerLogo.svg";
 import facebook from "../../assets/facebookLogo.svg";
 import linkdin from "../../assets/linkdinLogo.svg";
export const Footer = (params) => {
  
  return (
    <div className="px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10 ">
      <div className="bg-[#DFE42F] m-auto h-[2px] "></div>
      <div className="lg:flex md:flex items-center justify-between  mt-10 ">
      <div className="md:flex lg:flex items-center m-auto sm:m-auto lg:m-0   justify-between">
        <div className="flex items-center">
          <img src={whitlogo} alt="" />
          <h1 className="text-[39px] font-[700] ml-2">BANDOG</h1>
        </div>
        <div className="ml-12  text-sm font-[500] whitespace-nowrap overflow-ellipsis">HOME</div>
        <div className="ml-12 text-sm font-[500] whitespace-nowrap overflow-ellipsis">NFT collection</div>
      </div>
      <div className="w-[200px]"></div>
      <div className="flex md:justify-center lg:justify-end sm:justify-center gap-3  mt-5 l md:m-auto sm:m-auto lg:m-0 ">
        <div className="w-[62px]">
          <img className="w-full" src={insta} alt="error" />
        </div>
        <div className="w-[62px]"><img className="w-full" src={facebook} alt="error" /></div>
        <div className="w-[62px]"><img className="w-full" src={twiteer} alt="error" /></div>
        <div className="w-[62px]"><img className="w-full" src={linkdin} alt="error" /></div>
      </div>
    </div>
    </div>
  );
};
