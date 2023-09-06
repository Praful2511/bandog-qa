import { Outlet } from "react-router-dom"

export const CollectionsDetailPage = (params) => {
    return (
        <div>
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

