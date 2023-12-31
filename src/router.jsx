import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "../src/pages/home"
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { AuthLayout } from "./layouts/authLayout";
import { OTP } from "./pages/otp";
import { CollectionsDetailPage } from "./pages/collectionsDetailPage";
import { CollectionPage } from "./pages/collectionsPage";
import { BankDetailPage } from "./components/bankComponents/bankComponent";
import { ProfilePage } from "./pages/profilePage";
import { MyNfts } from "./components/profileComponents/mynfts";
import { CooldownNfts } from "./components/profileComponents/cooldownNfts";
import ForgetPassword from "./pages/forgetPassword";
import ForgetPasswordOTP from "./pages/forgetPasswordOTP";
import ResetPassword from "./pages/updatePassword";
import UpdatePassword from "./pages/updatePassword";
import TransactionHistory from "./pages/transactionHistory";

export const Routers = (params) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />} >
                        <Route index element={<Home />} />
                        <Route path='collection' element={<CollectionPage />} />
                        <Route path="collection/:nftid" element={<CollectionsDetailPage />} >
                            <Route path="bank" element={<BankDetailPage />} />
                        </Route>
                        <Route path="profile" element={<ProfilePage />} >
                            <Route index path="" element={<MyNfts />} />
                            <Route path="my-cooldown-nft" element={<CooldownNfts />} />
                        </Route>
                        <Route path="/transaction" element={<TransactionHistory/>}/> 
                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/otp" element={<OTP />} />
                        <Route  path="/forgetpassword" element={<ForgetPassword/>} />
                        <Route path="/forgetpasswordotp" element={<ForgetPasswordOTP/>}/>
                        <Route path="/updatepassword" element={<UpdatePassword />}/>
                        
                    </Route>

                    <Route path='*' element={<>NOT FOUND</>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}