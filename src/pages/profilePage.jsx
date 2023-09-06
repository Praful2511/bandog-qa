import { NavLink, Outlet } from "react-router-dom";
import { PrimaryButton } from "../components/buttons/primaryButton";
import transactionArrow from "../assets/transactionArrow.svg";
import Tab from "../components/tab";
import { MyNfts } from "../components/profileComponents/mynfts";
import { CooldownNfts } from "../components/profileComponents/cooldownNfts";

export const ProfilePage = (params) => {
  const tabLabels = ["My NFT", "NFTs in cooldown period"];
  const tabContent = [<MyNfts />, <CooldownNfts />];
  return (
    <div className="px-4 md:px-8 lg:px-24 pt-8 sm:pt-10 pb-10">
      <div>
        <div className="md:aspect-[16/2] aspect-[16/6] bg-[#000000]"></div>
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[12rem] w-[6rem] md:h-[12rem] h-[6rem] md:mt-[-6rem] mt-[-3rem] rounded-full bg-[#343434]"></div>
            <div className="md:mt-[-4rem] md:ml-4 mt-1">
              <div className="md:text-3xl text-base font-bold">John</div>
              <div className="opacity-70 md:text-base text-xs">
                john@gmail.com
              </div>
            </div>
          </div>
          <div className="md:mt-[-4rem] md:w-[15rem] w-full md:h-[46px] md:text-base text-[10px] md:block flex justify-end mt-[-2rem]">
            <PrimaryButton>
              <span className="flex">
                <img
                  src={transactionArrow}
                  alt="arrow transaction"
                  className="mr-2 w-3"
                ></img>
                Transaction History
              </span>
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="flex mt-12 ">
        <Tab labels={tabLabels} content={tabContent} />
        {/* <NavLink
          to="/profile"
          activeClassName=" opacity-60 hover:opacity-100 underline decoration-[#f3f34c]"
        >
          <p className="opacity-60 hover:opacity-100">My NFT</p>
        </NavLink>
        <NavLink
          to="/profile/my-cooldown-nft"
          activeClassName="underline decoration-[#f3f34c]"
          className="ml-10"
        >
          <p className="opacity-60 hover:opacity-100">
          NFTs in cooldown period
            
          </p>
        </NavLink> */}
        {/* <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""  
          }
        >
          <span className=" hover:text-gray-300">My NFT </span>
        </NavLink>
       
        <NavLink
          to="/profile/my-cooldown-nft"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <span className=" hover:text-gray-300"> NFTs in cooldown period</span>
        </NavLink> */}
      </div>
      
      <div>
        <Outlet />
      </div>
      {/* <div>tabs</div> */}
    </div>
  );
};
