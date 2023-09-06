import { Outlet } from "react-router-dom"
import dogCard from "../assests/dogCard.png"
import backArrow from "../assests/backArrow.svg"
export const CollectionsDetailPage = (params) => {
    return (
        <div className="px-4 lg:px-24 3xl:px-10 pt-8 sm:pt-10 pb-10">
            <div className="flex">
                <div>
                <img src={dogCard} alt="" />
                </div>
             <div>
                    <div></div>
             </div>
            </div>

            <h1>Details CollectionsDetailPage</h1>
            <div className="flex ">
                <div>
                    <h1>NFT detail</h1>
                </div>
                <div className="bg-primary">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

