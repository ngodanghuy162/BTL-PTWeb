import AdminPage from "../pages/Admin/Admin";
import SignupPage from "../pages/Account/SignUp/index";
import Bill from "../pages/Order/Bill/index";
import Employee from "../pages/Employee/Main/OrderCf/index";
import AddOrder from "../pages/Employee/Main/Content/Content";

const LeaderGdRoutes = [
    { path: '/admin', component: AdminPage },
    { path: '/admin/signup', component: SignupPage },
];

const AdminGdRoutes = [
    { path: '/admin', component: AdminPage },
    { path: '/admin/signup', component: SignupPage },
];

const AdminTkRoutes = [
    { path: '/admin', component: AdminPage },
    { path: '/admin/signup', component: SignupPage },
];

const NvgdRoutes = [
    { path: '/bill', component: Bill },
    { path: '/employee', component: AddOrder },
    { path: '/employee/neworders', component: Employee },
];

const NvtkRoutes = [
    { path: '/bill', component: Bill },
    { path: '/employee', component: AddOrder },
    { path: '/employee/neworders', component: Employee },
];

export { LeaderGdRoutes, AdminGdRoutes, AdminTkRoutes, NvgdRoutes, NvtkRoutes }