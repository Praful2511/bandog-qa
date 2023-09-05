import React from 'react'
import InputComp from './inputs/InputComp'

const SignupCard = () => {
  return (
    <div>
        <div className="w-[395px]">
      <div className="text-3xl font-extrabold mb-6"> Sign Up </div>
      <div className="opacity-70 mb-8 ">
        Enter details to Sign up to platform
      </div>
      <div>
        <InputComp type={"name"} placeholder={"Name"}/>
      </div>
      <div className='mt-8'>
        <InputComp type={"email"} placeholder={"Email"} />
      </div>
      <div className="mt-8">
        <InputComp type={"password"} placeholder={"Password"} />
      </div>
      <div className="mt-8">
      <InputComp type={"password"} placeholder={"Confirm Password"} />
      </div>
      <div className="mt-12">
        <button className="w-full bg-[#DFE42F] text-black text-[20px] p-4 rounded-xl font-semibold   transition-all duration-100 ease-in-out hover:bg-[#b7c644]  ">Next </button>
      </div>
      <div className="w-full flex justify-center mt-5">
        <span className="opacity-90 ">I have an account.</span><span className="text-[#DFE42F] font-bold cursor-pointer " >Login</span>
      </div>
    </div>
    </div>
  )
}

export default SignupCard