import React from "react";
import InputComp from "./InputComp";

const LoginCard = () => {
  return (
    <div className="w-[395px]">
      <div className="text-3xl font-extrabold mb-6"> Login </div>
      <div className="opacity-70 mb-8 ">
        {" "}
        Enter details to login again to platform{" "}
      </div>
      <div>
        <InputComp type={"email"} placeholder={"Email"} />
      </div>
      <div className="mt-8">
        <InputComp type={"password"} placeholder={"Password"} />
      </div>
      <div className="text-[#DFE42F]  mt-3 w-full flex justify-end  ">
        <span className="text-[18px] cursor-pointer"> Reset Password</span>
      </div>
      <div className="mt-12">
        <button className="w-full bg-[#DFE42F] text-black text-[20px] p-4 rounded-xl font-semibold transition-all duration-100 ease-in-out hover:bg-[#b7c644]  ">Login </button>
      </div>
      <div className="w-full flex justify-center mt-5">
        <span className="opacity-90 ">I don’t have an account.</span><span className="text-[#DFE42F] font-bold cursor-pointer " >Sign Up</span>
      </div>
    </div>
  );
};

export default LoginCard;
