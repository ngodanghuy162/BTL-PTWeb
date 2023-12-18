import { Navigate, Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import { adminRoutes, employeeRoutes } from "./privateRoutes";
import {useAuth} from "../hooks/AuthContext";

const AppRoutes = () => {
  const {isAdminLogin} = useAuth();
  const {isEmployeeLogin} = useAuth();
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
            element={isAdminLogin ? (
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
            element={isEmployeeLogin ? (
              <Page />
            ) : (
              <Navigate to="/login" />
            )}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
