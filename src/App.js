import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Dashboard from "./Components/Dashboard";
import AddMerchants from "./Components/Merchants/AddMerchants";
import AllMerchants from "./Components/Merchants/AllMerchants";
import PendingMerchants from "./Components/Merchants/PendingMerchants";
import RejectedMerchants from "./Components/Merchants/RejectedMerchants";
import AllOrder from './Components/Order/AllOrder';
import PendingOrder from './Components/Order/PendingOrder';
import RejectedOrder from './Components/Order/RejectedOrder';
import ProgressOrder from './Components/Order/ProgressOrder';
import ReturningOrder from './Components/Order/ReturningOrder';
import Income from './Components/Account/Income';
import Expense from './Components/Account/Expense';
import PaidInvoice from './Components/Account/PaidInvoice';
import UnpaidInvoice from './Components/Account/UnpaidInvoice';
import MakeSalary from './Components/Account/MakeSalary';
import Invoice from './Components/Invoice';
import Edit from './Components/Edit';
import AddNotice from "./Components/Notice/AddNotice";
import AllNotice from "./Components/Notice/AllNotice";
import AllRider from "./Components/Rider/AllRider";
import PendingRider from "./Components/Rider/PendingRider";
import RejectedRider from "./Components/Rider/RejectedRider";
import AddRider from "./Components/Rider/AddRider";
import AddArea from "./Components/Area/AddArea";
import ManageArea from "./Components/Area/ManageArea";
import WebsiteSettings from "./Components/Settings/WebsiteSettings";
import GeneralSetting from "./Components/Settings/GeneralSetting";
import AddUsers from "./Components/User/AddUsers";
import AllUsers from "./Components/User/AllUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="all-merchants" element={<AllMerchants />} />
          <Route path="add-merchants" element={<AddMerchants />} />
          <Route path="pending-merchants" element={<PendingMerchants />} />
          <Route path="rejected-merchants" element={<RejectedMerchants />} />


          <Route path="all-order" element={<AllOrder /> }> </Route>
          <Route path="pending-order" element={<PendingOrder />}> </Route>
          <Route path="rejected-order" element={<RejectedOrder />}> </Route>
          <Route path="progress-order" element={<ProgressOrder />}> </Route>
          <Route path="returning-order" element={<ReturningOrder />}> </Route>
          <Route path="income" element={<Income />}> </Route>
          <Route path="expense" element={<Expense/>}> </Route>
          <Route path="paid-invoice" element={<PaidInvoice />}> </Route>
          <Route path="unpaid-invoice" element={<UnpaidInvoice />}> </Route>
          <Route path="make-salary" element={<MakeSalary />}> </Route>
          <Route path="invoice" element={<Invoice />}> </Route>
          <Route path="edit" element={<Edit />}> </Route>

          <Route path="add-rider" element={<AddRider />} />
          <Route path="all-rider" element={<AllRider />} />
          <Route path="pending-rider" element={<PendingRider />} />
          <Route path="rejected-rider" element={<RejectedRider />} />
          
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
