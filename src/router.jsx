import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "../src/pages/home"
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { AuthLayout } from "./layouts/authLayout";
import { OTP } from "./pages/otp";

export const Routers = (params) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />} >
                        <Route index element={<Home />} />
                    </Route>

                    <Route element={<AuthLayout />}>
                        <Route path="/signup" element={<Signup />} />
                        <Route  path="/login" element={<Login />} />
                        <Route path="/otp" element={<OTP />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}