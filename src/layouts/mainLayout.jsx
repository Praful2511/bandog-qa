import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/navbar/navbar"
import {  useLocation, } from 'react-router-dom'

export const MainLayout = () => {
    const location = useLocation();
    console.log(location.pathname) 
    return <>
        <div className="bg-mainBg min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="">
                <div className="w-full ">
                    <Outlet />
                </div>
            </div>
           { <div className="">
                <Footer />
            </div>}
        </div>
    </>
}