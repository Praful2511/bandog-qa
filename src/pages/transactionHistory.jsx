import React from "react";
import TransactionComp from "../components/transactionComponents/transactionComp";

const TransactionHistory = () => {
    const transactionData = {
        transactionID: "046253",
        nftName: "Bulldog",
        nftTier: "Tier 1",
        nftNo: "455982055",
        date: "25-05-2023",
        time: "12:25:00",
        paymentType: "Bank Transfer",
        price: "25 USD",
        status: "Successful",
      };
  return (
    <div className="mb-64">
      <div className="h-[210px]  bg-opacity-[0.07] bg-white">
        <div className="px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10">
          <h1 className="text-[49px] mt-20">Transaction History</h1>
        </div>
        <div>
          {/* </div> */}

          <div className="w-full px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10 overflow-x-auto table-min-h">
            <table className="w-full table-auto table">
              <thead className="bg-[#161617] rounded-md header-table w-full">
                <th className="min-w-[120px] py-4 ">Transaction ID</th>
                <th className="min-w-[120px] py-4  ">NFT</th>
                <th className="min-w-[150px] py-4 ">NFT No.</th>
                <th className="min-w-[150px] py-4 ">Date</th>
                <th className="min-w-[200px] py-4 ">
                Payment Type
                </th>
                <th className="min-w-[150px] py-4 ">Price</th>
                <th className="min-w-[120px] py-4 ">Status</th>
              </thead>
              
              <TransactionComp {...transactionData} />


              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
