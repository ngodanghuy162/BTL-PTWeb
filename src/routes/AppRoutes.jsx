import { Navigate, Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import { adminRoutes, employeeRoutes } from "./privateRoutes";

// import LandingPage from "../pages/Landing/Landing";
// import AdminPage from "../pages/Admin/Admin";
// import LoginPage from "../pages/Account/Login/index";
// import SignupPage from "../pages/Account/SignUp/index";
// import SearchPage from "../pages/Order/index";
// import Data from "../pages/Order/Bill/index";
// import Employee from "../pages/Employee/Main/OrderCf/index";
// import AddOrder from "../pages/Employee/Main/Content/Content";

const AppRoutes = () => {
  const isLoggedIn = false;
  return (
    <Routes>
      {publicRoutes.map((router, index) => {
        const Page = router.component;
        return (
          <Route
            key={index}
            path={router.path}
            element={<Page />}
          />
        );
      })}
      {adminRoutes.map((router, index) => {
        const Page = router.component;
        return (
          <Route
            key={index}
            path={router.path}
            element={isLoggedIn ? (
              <Page />
            ) : (
              <Navigate to="/login" />
            )}
          />
        );
      })}
      {employeeRoutes.map((router, index) => {
        const Page = router.component;
        return (
          <Route
            key={index}
            path={router.path}
            element={isLoggedIn ? (
              <Page />
            ) : (
              <Navigate to="/login" />
            )}
          />
        );
      })}
      {/* <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={isLogin ?<AdminPage /> : <Navigate to="/"/>}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/data" element={<Data />}></Route>
      <Route path="/employee" element={<AddOrder />}></Route>
      <Route path="/employee/neworders" element={<Employee />}></Route> */}
      {/* <Route path="*" element={<NotFoundPage />}></Route> */}
    </Routes>
  );
};

export default AppRoutes;
