import LandingPage from "../pages/Landing/Landing";
import LoginPage from "../pages/Account/Login/index";
import SearchPage from "../pages/Order/index";
import Bill from "../pages/Order/Bill/index";
import Pdf from "../pages/Order/Bill/pdf";

const publicRoutes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/search', component: SearchPage },
    { path: '/bill', component: Bill },
    { path: '/pdf', component: Pdf },
];

export default publicRoutes;