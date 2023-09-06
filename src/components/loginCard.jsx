import React from "react";
import InputComp from "./inputs/InputComp";
import { PrimaryButton } from "./buttons/primaryButton";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="min-w-[395px]">
      <div className="text-3xl font-extrabold mb-4"> Login </div>
      <div className="opacity-70 mb-6 ">
        Enter details to login again to platform
      </div>
      <div>
        <InputComp type={"email"} placeholder={"Email"} />
      </div>
      <div className="mt-5">
        <InputComp type={"password"} placeholder={"Password"} />
      </div>
      <div className="text-[#DFE42F]  mt-3 w-full flex justify-end  ">
        <Link to="/forgetpassword" className=" text-base    cursor-pointer"> Reset Password</Link>
      </div>
      <div className="mt-12">
        <PrimaryButton fontSize={20} height={52} >Login</PrimaryButton>
      </div>
      <div className="w-full flex justify-center mt-5">
        <span className="opacity-80 font-thin ">I don’t have an account? </span><Link to="/signup" className="text-[#DFE42F] font-bold cursor-pointer hover:underline " > Signup</Link>
      </div>
      
    </div>
  );
};

export default LoginCard;
