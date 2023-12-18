import { Navigate, Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import { adminRoutes, employeeRoutes } from "./privateRoutes";
import {useAuth} from "../hooks/AuthContext";

const AppRoutes = () => {
  const {isLoggedIn} = useAuth();
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
