import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/Landing";
import AdminPage from "../pages/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      {/* <Route path="*" element={<NotFoundPage />}></Route> */}
    </Routes>
  );
};

export default AppRoutes;
