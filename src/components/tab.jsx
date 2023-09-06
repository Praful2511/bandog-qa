import React, { useState } from 'react';

const Tab = ({ labels, content }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex w-full">
        {labels.map((label, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? 'bg-blue-500 underline underline-offset-[15px] decoration-[#fafd50]'
                : 'bg-gray-200 text-gray-600'
            } px-4 py-2 rounded-l focus:outline-none`}
            onClick={() => {setActiveTab(index)
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="border-t-[#707070]">
        {content[activeTab]} 
      </div>
    </div>
  );
};

export default Tab;
