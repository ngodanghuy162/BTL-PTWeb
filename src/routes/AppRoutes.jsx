import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Landing/Landing";
import AdminPage from "../pages/Admin/Admin";
import LoginPage from "../pages/Account/Login/index";
import SignupPage from "../pages/Account/SignUp/index";
import SearchPage from "../pages/Order/index";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            {/* <Route path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
    );
};

export default AppRoutes;
