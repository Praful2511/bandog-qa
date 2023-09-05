import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/navbar/navbar"


export const MainLayout = () => {
    return <>
        <div className="bg-mainBg min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="px-4 lg:px-8 3xl:px-10 pt-8 sm:pt-10 pb-10 grid grid-cols-[1fr] 3xl:grid-cols-[1fr_16.75rem] gap-10">
                <div className="w-full mx-auto">
                    <Outlet />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>
}