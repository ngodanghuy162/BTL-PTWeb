import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Landing/Landing";
import AdminPage from "../pages/Admin/Admin";
import LoginPage from "../pages/Account/Login/index";
import SignupPage from "../pages/Account/SignUp/index";
import SearchPage from "../pages/Order/index";
import Data from "../pages/Order/Bill/index";
import Employee from "../pages/Employee/Edit/index";
import Test from "../pages/Employee/Test/index"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}
      
      ></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/data" element={<Data />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/test" element={<Test />}></Route>
      {/* <Route path="*" element={<NotFoundPage />}></Route> */}
    </Routes>
  );
};

export default AppRoutes;
