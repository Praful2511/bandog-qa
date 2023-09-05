import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "../src/pages/home"


export const Routers = (params) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />} >
                        <Route index element={<Home/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}