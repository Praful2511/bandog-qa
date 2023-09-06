import { Link } from "react-router-dom"

export const CollectionPage = (params) => {
    return (
        <div>

            <h1>CollectionPage</h1>
            <div className="productsNav">
                <Link to="/collection/1"> details Page </Link>
                <Link to="/collection/1/bank"> bank </Link>
            </div>
        </div>

    )
}