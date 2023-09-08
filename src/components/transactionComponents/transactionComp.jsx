import React from "react";
import img from "../../assets/transactionImage.svg";

const TransactionComp = (props) => {
  return (
    <tbody className="border-[#272728]">
      <tr>
        <td className="p-5">
          <span>{props.transactionID}</span>
        </td>
        <td>
          <div className="flex">
            <img src={img} alt=""></img>
            <div className="ml-2">
              <div>{props.nftName}</div>
              <div className="text-xs mt-1 opacity-70">{props.nftTier}</div>
            </div>
          </div>
        </td>
        <td>{props.nftNo}</td>
        <td>
          <div>
            <div>{props.date}</div>
            <div>{props.time}</div>
          </div>
        </td>
        <td>
          <div>{props.paymentType}</div>
        </td>
        <td>{props.price}</td>
        <td>{props.status}</td>
      </tr>
    </tbody>
  );
};

export default TransactionComp;