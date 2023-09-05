import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputComp = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#121212] text-[18px] p-4 w-full pr-10 rounded-xl" 
      />
      {type === 'password' && (
        <div
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer p-2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <AiOutlineEye size={22} color="#ccc" />
           
          ) : (
            <AiOutlineEyeInvisible size={22} color="#ccc" />
            
          )}
        </div>
      )}
    </div>
  );
};

export default InputComp;
