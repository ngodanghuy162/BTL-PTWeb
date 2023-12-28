import { Navigate, Route, Routes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import {
    LeaderGdRoutes,
    AdminGdRoutes,
    AdminTkRoutes,
    NvgdRoutes,
    NvtkRoutes,
} from "./privateRoutes";
import { useAuth } from "../hooks/AuthContext";

const AppRoutes = () => {
    const { isLeaderLogin } = useAuth();
    const { isAdminGdLogin } = useAuth();
    const { isAdminTkLogin } = useAuth();
    const { isNvgdLogin } = useAuth();
    const { isNvtkLogin } = useAuth();
    return (
        <Routes>
            {publicRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route key={index} path={router.path} element={<Page />} />
                );
            })}

            {LeaderGdRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route
                        key={index}
                        path={router.path}
                        element={
                            isLeaderLogin ? <Page /> : <Navigate to="/login" />
                        }
                    />
                );
            })}

            {AdminGdRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route
                        key={index}
                        path={router.path}
                        element={
                            isAdminGdLogin ? <Page /> : <Navigate to="/login" />
                        }
                    />
                );
            })}

            {AdminTkRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route
                        key={index}
                        path={router.path}
                        element={
                            isAdminTkLogin ? <Page /> : <Navigate to="/login" />
                        }
                    />
                );
            })}

            {NvgdRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route
                        key={index}
                        path={router.path}
                        element={
                            isNvgdLogin ? <Page /> : <Navigate to="/login" />
                        }
                    />
                );
            })}

            {NvtkRoutes.map((router, index) => {
                const Page = router.component;
                return (
                    <Route
                        key={index}
                        path={router.path}
                        element={
                            isNvtkLogin ? <Page /> : <Navigate to="/login" />
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;
