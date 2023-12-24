import AdminPage from "../pages/Admin/Admin";
import SignupPage from "../pages/Account/SignUp/index";
import Bill from "../pages/Order/Bill/index";
import Employee from "../pages/Employee/Main/OrderCf/index";
import AddOrder from "../pages/Employee/Main/Content/Content";

const adminRoutes = [
    { path: '/admin', component: AdminPage },
    { path: '/admin/signup', component: SignupPage },
];
const employeeRoutes = [
    { path: '/bill', component: Bill },
    { path: '/employee', component: AddOrder },
    { path: '/employee/neworders', component: Employee },
];

export { adminRoutes, employeeRoutes }