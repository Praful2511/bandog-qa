import React, { useState, useRef } from "react";
import backArrow from "../assests/backArrow.svg";
import { PrimaryButton } from "../components/buttons/primaryButton";

export const OtpCard = (props) => { // Receive the props parameter
  const [otp, setOtp] = useState(["", "", "", ""]); 
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return; 
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    
    if (e.key === "Backspace" && index > 0 && value === "") {
      inputRefs[index - 1].current.focus();
    } else if (index < 3 && value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };
  
  return (
    <div>
      <div className="text-white  w-[395px] m-auto">
        <div className="flex">
          <img src={backArrow} alt="error" />
          <h4 className="text-[24px] font-[600] ml-2">Enter OTP</h4>
        </div>
        <div>
          <p className="text-[14px] font-[400] mt-2 ml-7 opacity-[0.7]">
            Enter OTP that sent on your email
          </p>
        </div>
        <div className="text-white mt-6 ml-7">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleInputChange(e, index)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "31px",
                width: "57px",
                marginLeft: "9px",
                outline: "none",
                height: "81px",
                textAlign: "center",
              }}
            />
          ))}
        </div>
        <div className="mt-10 ml-7">
          <PrimaryButton fontSize={20} height={52}>
            {props.buttonText} {/* Access the buttonText prop */}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
