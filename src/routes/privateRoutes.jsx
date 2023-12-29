import AdminPage from "../pages/Admin/Admin";
import SignupPage from "../pages/Account/SignUp/index";
import Bill from "../pages/Order/Bill/index";
import EmployeeTk from "../pages/Employee/Main/OrderCf/index";
import EmployeeGd from "../pages/Employee/Main/OrderCfGd/index";
import AddOrder from "../pages/Employee/Main/Content/Content";
import AllOrder from "../pages/Employee/Main/AllOrder/index";
import GiaoHang from "../pages/Employee/Main/GiaoHang/index";

const LeaderGdRoutes = [
    { path: "/leader", component: AdminPage },
    { path: "/leader/signup", component: SignupPage },
];

const AdminGdRoutes = [
    { path: "/admingd", component: AdminPage },
    { path: "/admingd/signup", component: SignupPage },
];

const AdminTkRoutes = [
    { path: "/admintk", component: AdminPage },
    { path: "/admintk/signup", component: SignupPage },
];

const NvgdRoutes = [
    { path: "/nvgd", component: AddOrder },
    { path: "/nvgd/status", component: EmployeeGd },
    { path: "/nvgd/all", component: AllOrder },
    { path: "/nvgd/giaohang", component: GiaoHang },
];

const NvtkRoutes = [
    { path: "/nvtk", component: EmployeeTk },
    // { path: '/nvtk/status', component: EmployeeTk },
    // { path: '/nvtk/hangden', component: Employee },
];

export { LeaderGdRoutes, AdminGdRoutes, AdminTkRoutes, NvgdRoutes, NvtkRoutes };
