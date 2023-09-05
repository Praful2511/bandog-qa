import React from "react";
import InputComp from "./inputs/InputComp";
import { PrimaryButton } from "./buttons/primaryButton";
import { Link } from "react-router-dom";

const SignupCard = () => {
  return (
    <div>
      <div className="min-w-[395px]">
        <div className="text-3xl font-extrabold mb-4"> Sign Up </div>
        <div className="opacity-70 mb-6 ">
          Enter details to Sign up to platform
        </div>
        <div>
          <InputComp type={"name"} placeholder={"Name"} />
        </div>
        <div className="mt-5">
          <InputComp type={"email"} placeholder={"Email"} />
        </div>
        <div className="mt-5">
          <InputComp type="password" placeholder={"Password"} />
        </div>
        <div className="mt-5">
          <InputComp type="password" placeholder={"Confirm Password"} />
        </div>
        <div className="mt-12">
          <PrimaryButton fontSize={20} height={52}>
            Next
          </PrimaryButton>
        </div>
        <div className="w-full   font-thin   flex justify-center mt-6">
          <span className="opacity-80 ">I have an account.</span>

          <Link to="/login" className="text-[#DFE42F] font-semibold cursor-pointer hover:underline ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
