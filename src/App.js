import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Merchant
import DashboardMerchant from "./Components/Merchant/DashboardMerchant";
import Categories from "./Components/Merchant/Food/Categories";
import AddFood from "./Components/Merchant/Food/AddFood";
import AllFood from "./Components/Merchant/Food/AllFood";
import Profile from "./Components/Merchant/Profile/Profile";
import UpdateAdditional from "./Components/Merchant/Profile/UpdateAdditional";
import UpdateProfile from "./Components/Merchant/Profile/UpdateProfile";
import UpdatePassword from "./Components/Merchant/Profile/UpdatePassword";
import AllOrderMerchant from "./Components/Merchant/Order/AllOrder";
import PendingOrderMerchant from "./Components/Merchant/Order/PendingOrder";
import RejectedOrderMerchant from "./Components/Merchant/Order/RejectedOrder";
import ProgressOrderMerchant from "./Components/Merchant/Order/ProgressOrder";
import ReturningOrderMerchant from "./Components/Merchant/Order/ReturningOrder";
import IncomeMerchant from "./Components/Merchant/Account/Income";
import ExpenseMerchant from "./Components/Merchant/Account/Expense";
import PaidInvoiceMerchant from "./Components/Merchant/Account/PaidInvoice";
import UnpaidInvoiceMerchant from "./Components/Merchant/Account/UnpaidInvoice";
import MakeSalaryMerchant from "./Components/Merchant/Account/MakeSalary";
import EditOrderMerchant from "./Components/Merchant/Order/EditOrder";
import OrderInvoiceMerchant from "./Components/Merchant/Order/OrderInvoice";
// Admin 
import Dashboard from "./Components/Admin/Dashboard";
import AddMerchants from "./Components/Admin/Merchants/AddMerchants";
import AllMerchants from "./Components/Admin/Merchants/AllMerchants";
import PendingMerchants from "./Components/Admin/Merchants/PendingMerchants";
import RejectedMerchants from "./Components/Admin/Merchants/RejectedMerchants";
import AllOrder from "./Components/Admin/Order/AllOrder";
import PendingOrder from "./Components/Admin/Order/PendingOrder";
import RejectedOrder from "./Components/Admin/Order/RejectedOrder";
import ProgressOrder from "./Components/Admin/Order/ProgressOrder";
import ReturningOrder from "./Components/Admin/Order/ReturningOrder";
import Income from "./Components/Admin/Account/Income";
import Expense from "./Components/Admin/Account/Expense";
import PaidInvoice from "./Components/Admin/Account/PaidInvoice";
import UnpaidInvoice from "./Components/Admin/Account/UnpaidInvoice";
import MakeSalary from "./Components/Admin/Account/MakeSalary";
import Invoice from "./Components/Admin/Invoice";
import AddNotice from "./Components/Admin/Notice/AddNotice";
import AllNotice from "./Components/Admin/Notice/AllNotice";
import AllRider from "./Components/Admin/Rider/AllRider";
import PendingRider from "./Components/Admin/Rider/PendingRider";
import RejectedRider from "./Components/Admin/Rider/RejectedRider";
import AddRider from "./Components/Admin/Rider/AddRider";
import AddArea from "./Components/Admin/Area/AddArea";
import ManageArea from "./Components/Admin/Area/ManageArea";
import WebsiteSettings from "./Components/Admin/Settings/WebsiteSettings";
import GeneralSetting from "./Components/Admin/Settings/GeneralSetting";
import AddUsers from "./Components/Admin/User/AddUsers";
import AllUsers from "./Components/Admin/User/AllUsers";
import EditOrder from "./Components/Admin/Order/EditOrder";

import AddIncome from './Components/Admin/Account/AddIncome';
import EditAllOrder from './Components/Admin/Order/EditAllOrder';
import AddExpense from './Components/Admin/Account/AddExpense';
import AddPaidInvo from './Components/Admin/Account/AddPaidInvo';
import AddUnpaid from './Components/Admin/Account/AddUnpaid';
import AddSalary from './Components/Admin/Account/AddSalary';
import EditPending from './Components/Admin/Order/EditPending';
import EditRejected from './Components/Admin/Order/EditRejected';
import EditProgress from "./Components/Admin/Order/EditProgress";
import EditReturning from './Components/Admin/Order/EditReturning';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Merchant  */}

          <Route path="/add-food" element={<AddFood />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/all-food" element={<AllFood />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-info" element={<UpdateAdditional />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/update-password" element={<UpdatePassword />} />

          <Route path="/all-order-merchant" element={<AllOrderMerchant />} />
          <Route path="/pending-order-merchant" element={<PendingOrderMerchant />} />
          <Route path="/rejected-order-merchant" element={<RejectedOrderMerchant />} />
          <Route path="/progress-order-merchant" element={<ProgressOrderMerchant />} />
          <Route path="/returning-order-merchant" element={<ReturningOrderMerchant />} />
          <Route path="/edit-order-merchant" element={<EditOrderMerchant />} />
          <Route path="/order-invoice-merchant" element={<OrderInvoiceMerchant />} />

          <Route path="/income-merchant" element={<IncomeMerchant />} />
          <Route path="/expense-merchant" element={<ExpenseMerchant />} />
          <Route path="/paid-invoice-merchant" element={<PaidInvoiceMerchant />} />
          <Route path="/unpaid-invoice-merchant" element={<UnpaidInvoiceMerchant />} />
          <Route path="/make-salary-merchant" element={<MakeSalaryMerchant />} />

          <Route path="/dashboard-merchant" element={<DashboardMerchant />} />

          {/* Admin  */}
          <Route path="all-merchants" element={<AllMerchants />} />
          <Route path="add-merchants" element={<AddMerchants />} />
          <Route path="pending-merchants" element={<PendingMerchants />} />
          <Route path="rejected-merchants" element={<RejectedMerchants />} />

          <Route path="all-order" element={<AllOrder />} />
          <Route path="pending-order" element={<PendingOrder />} />
          <Route path="rejected-order" element={<RejectedOrder />} />
          <Route path="progress-order" element={<ProgressOrder />} />
          <Route path="returning-order" element={<ReturningOrder />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expense />} />
          <Route path="paid-invoice" element={<PaidInvoice />} />
          <Route path="unpaid-invoice" element={<UnpaidInvoice />} />
          <Route path="make-salary" element={<MakeSalary />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="edit-order" element={<EditOrder />} />
          <Route path="all-order" element={<AllOrder /> }> </Route>
          <Route path="edit-all-order" element={<EditAllOrder /> }> </Route>
          <Route path="edit-pending-order" element={<EditPending />}> </Route>
          <Route path="pending-order" element={<PendingOrder />}> </Route>
          <Route path="rejected-order" element={<RejectedOrder />}> </Route>
          <Route path="edit-rejected-order" element={<EditRejected />}> </Route>
          <Route path="progress-order" element={<ProgressOrder />}> </Route>
          <Route path="edit-progress-order" element={<EditProgress />}> </Route>
          <Route path="returning-order" element={<ReturningOrder />}> </Route>
          <Route path="edit-returning-order" element={<EditReturning />}> </Route>

          <Route path="income" element={<Income />}> </Route>
          <Route path="add-income" element={<AddIncome />}> </Route>
          <Route path="expense" element={<Expense/>}> </Route>
          <Route path="add-expense" element={<AddExpense/>}> </Route>
          <Route path="paid-invoice" element={<PaidInvoice />}> </Route>
          <Route path="add-paid-invoice" element={<AddPaidInvo />}> </Route>
          <Route path="unpaid-invoice" element={<UnpaidInvoice />}> </Route>
          <Route path="add-unpaid-invoice" element={<AddUnpaid />}> </Route>
          <Route path="make-salary" element={<MakeSalary />}> </Route>
          <Route path="add-make-salary" element={<AddSalary />}> </Route>



          <Route path="add-rider" element={<AddRider />} />

          <Route path="all-rider" element={<AllRider />} />
          <Route path="pending-rider" element={<PendingRider />} />
          <Route path="rejected-rider" element={<RejectedRider />} />

          <Route path="add-area" element={<AddArea />} />
          <Route path="manage-area" element={<ManageArea />} />
          


          <Route path="add-area" element={<AddArea />} />
          <Route path="manage-area" element={<ManageArea />} />
          

          <Route path="add-notice" element={<AddNotice />} />
          <Route path="all-notice" element={<AllNotice />} />

          <Route path="add-users" element={<AddUsers />} />
          <Route path="all-users" element={<AllUsers />} />

          <Route path="general-settings" element={<GeneralSetting />} />
          <Route path="website-settings" element={<WebsiteSettings />} />

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
