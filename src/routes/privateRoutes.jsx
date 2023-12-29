import AdminPage from "../pages/Admin/Admin";
import SignupPage from "../pages/Account/SignUp/index";
import Bill from "../pages/Order/Bill/index";
import Employee from "../pages/Employee/Main/OrderCf/index";
import AddOrder from "../pages/Employee/Main/Content/Content";

const LeaderGdRoutes = [
    { path: '/leader', component: AdminPage },
    { path: '/leader/signup', component: SignupPage },
];

const AdminGdRoutes = [
    { path: '/admingd', component: AdminPage },
    { path: '/admingd/signup', component: SignupPage },
];

const AdminTkRoutes = [
    { path: '/admintk', component: AdminPage },
    { path: '/admintk/signup', component: SignupPage },
];

const NvgdRoutes = [
    { path: '/nvgd', component: AddOrder },
    { path: '/nvgd/neworders', component: Employee },
];

const NvtkRoutes = [
    { path: '/nvtk', component: AddOrder },
    { path: '/nvtk/status', component: Employee },
    // { path: '/nvtk/hangden', component: Employee },
];

export { LeaderGdRoutes, AdminGdRoutes, AdminTkRoutes, NvgdRoutes, NvtkRoutes }