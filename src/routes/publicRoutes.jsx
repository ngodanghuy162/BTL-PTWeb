import LandingPage from "../pages/Landing/Landing";
import LoginPage from "../pages/Account/Login/index";
import SearchPage from "../pages/Order/index";

const publicRoutes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/search', component: SearchPage },
];

export default publicRoutes;