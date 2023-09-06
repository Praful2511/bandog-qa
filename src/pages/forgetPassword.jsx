import React from 'react'
import { PrimaryButton } from '../components/buttons/primaryButton'
import backArrow from "../assets/backArrow.svg";
import InputComp from '../components/inputs/InputComp';
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
  return (
    <div>
      <div className="text-white  w-[395px] m-auto">
        <div className="flex items-center">
          <Link to="/login"> <img src={backArrow} alt="error" /> </Link>
          <h4 className="text-[24px] font-[600] ml-2">Enter OTP</h4>
        </div>
        <div>
          <p className="text-[14px] font-[400] mt-2 ml-7 opacity-[0.7]">
            Enter OTP that sent on your email
          </p>
        </div>
        <div className='mt-6 ml-7'>
        <InputComp type={"email"} placeholder={"Email"} />
         
        </div>
        
        <div className="mt-10 ml-7">
          <PrimaryButton fontSize={20} height={52}>
             Send OTP
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword