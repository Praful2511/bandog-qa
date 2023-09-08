import { useNavigate } from "react-router-dom"
import InputComp from "../inputs/InputComp"
import backArrow from "../../assets/backArrow.svg";
import bankLogo from "../../assets/bankLogo.svg";
import receptUpload from "../../assets/receptUpload.svg";
import idUpload from "../../assets/idUpload.svg";
import { PrimaryButton } from "../buttons/primaryButton";

export const BankDetailPage = (params) => {
    const navigate = useNavigate()
    return (
        <div className="container w-[587px]">
        <div className=" flex gap-5">
         <span onClick={()=>navigate(-1)}><img src={backArrow} alt="" /></span>  <div>Pay with Bank Transfer</div>{" "}
          <img className="opacity-[0.7]" src={bankLogo} alt="" />
        </div>
        <div className="mt-5 ">
          <div className="text-base opacity-[0.7]">NFT Number:</div>
          <div className=" mt-1">
            <InputComp placeholder={"0853456"} />
          </div>
        </div>
        <div className="mt-5 ">
          <div className="text-base opacity-[0.7]">Enter Wallet Address</div>
          <div className="mt-1">
            <InputComp placeholder={"ex 3522414558"} />
          </div>
        </div>
        <div className=" mt-4">
          <div className="opacity-[0.7]">Upload Bank Receipt</div>
        
          <div className=" mt-2  border border-dashed border-gray-300 opacity-[0.7] h-[90px]  items-center">
            <div className="h-5/6  m-auto items-center mt-2 ">
              <div className=" inset-0 flex justify-center items-center mt-4">
                <div className="w-[38px]  object-cover ">
                  <img
                    className="w-full h-full object-contain"
                    src={receptUpload}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm font-normal text-center opacity-[0.7]">
                Click to upload bank receipt
              </div>
            </div>
          </div>
          </div>
         
      
        <div className=" mt-4">
          <div className="opacity-[0.7]">Upload ID Card</div>
          <div className="mt-2">
          <div className=" top-0 left-0 right-0 bottom-0 border border-dashed border-gray-300 opacity-[0.7] h-[90px]  items-center">
            <div className="h-5/6  m-auto items-center mt-2 ">
              <div className=" inset-0 flex justify-center items-center mt-4">
                <div className="w-[38px]  object-cover ">
                  <img
                    className="w-full h-full object-contain"
                    src={idUpload}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm font-normal text-center opacity-[0.7]">
                Click to upload Id Card
              </div>
            </div>
          </div>
          </div>
         
        </div>
        <div className="mt-2 w-[587px]">
          <div className="text-base opacity-[0.7]">Remark</div>
          <div className="h-[96px]">
          <InputComp placeholder={"Type here"} />
          </div>
        </div>
        <div className="w-[587px]">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    )
}