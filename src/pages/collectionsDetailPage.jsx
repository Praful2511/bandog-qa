import { Navigate, Outlet, useNavigate ,useLocation} from "react-router-dom";
import dogCard from "../assets/dogCard.png";
import backArrow from "../assets/backArrow.svg";
import bankLogo from "../assets/bankLogo.svg";
import walletLogo from "../assets/walletLogo.svg";
import { PrimaryButton } from "../components/buttons/primaryButton";
import dogone from "../assets/dogassests/dogCardOne.png";

import InputComp from "../components/inputs/InputComp";
import { useState } from "react";
export const CollectionsDetailPage = (params) => {
  const dogArray = new Array(4).fill("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const [payentTab, setpayentTab] = useState(false)
  console.log(location);
  return (
    <div className="px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10">
      <div className="flex">
        <div>
          <img src={dogCard} alt="" />
        </div>
        {!location.pathname.includes("bank") &&<div className="ml-7">
          <div className="flex">
            <img src={backArrow} alt="error" />
            <h4 className="ml-2 text-sm font-normal">
              NFT Collection / New NFT
            </h4>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-4xl font-normal">Super Cute Dog</div>
            <div className="w-[78px] p-2 ml-7 bg-opacity-10 rounded-3xl bg-white items-center text-center text-sm">
              {" "}
              Tier 1
            </div>
          </div>
          <div className="mt-9">
            <div className="text-base opacity-[0.7]">NFT Number:</div>
            <div>015652366</div>
          </div>
          <div className="w-[537px] mt-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam integer aliquam odio
              urna leo a imperdiet et. Tristique id nec sed faucibus. Faucibus
              aenean enim donec neque diam amet sem iaculis. Venenatis ornare
              fringilla egestas turpis nibh lobortis volutpat.
            </p>
          </div>
          <div className="mt-7">
            <div className="text-sm font-normal opacity-[0.7]">Price:</div>
            <div className="flex items-center">
              <div className="text-3xl font-bold">25.6</div>{" "}
              <div className="ml-2 font-normal">USD</div>
            </div>
          </div>
          <div className="mt-8 = w-full">
            <div className="text-sm font-normal opacity-[0.7]">Pay with:</div>
            <div className="flex mt-3 w-full gap-4 justify-between">
              <PrimaryButton
              onClick={()=>navigate(`${location.pathname}/bank`)}>
                {" "}
                <div className="flex gap-2">
                  <img src={bankLogo} alt="" />
                  <di className="text-white">Bank Transfer</di>
                </div>
              </PrimaryButton>
              <PrimaryButton>
                {" "}
                <div className="flex gap-2">
                  <img src={walletLogo} alt="" />
                  <di className="text-white">Wallet Transfer</di>
                </div>
              </PrimaryButton>
            </div>
          </div>
        </div>}
        <Outlet />
      </div>

      <div className="mt-14">
        <div className="text-lg">You may like</div>
        <div className="flex flex-wrap gap-8  mt-2 ">
          {dogArray.map((item, i) => (
            <div
              key={i}
              className="mt-5 bg-white m-auto  bg-opacity-[0.07] w-[306px] rounded-lg p-1"
            >
              <div className=" shadow-lg p-1 rounded-lg overflow-hidden">
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
      </div>
     </div>
  );
};
