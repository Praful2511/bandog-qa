import { Link, Outlet } from "react-router-dom"

export const ProfilePage = (params) => {
    return (
        <div>

            <h1>profilePage</h1>
            <div className="productsNav">
                <Link to="/profile"> mynft</Link>
                <Link to="/profile/my-cooldown-nft"> cooldown </Link>
            </div>
            <div>tabs</div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}