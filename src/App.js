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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}> </Route>
          <Route path="all-merchants" element={<AllMerchants />}> </Route>
          <Route path="add-merchants" element={<AddMerchants />}> </Route>
          <Route path="pending-merchants" element={<PendingMerchants />}> </Route>
          <Route path="rejected-merchants" element={<RejectedMerchants />}> </Route>

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
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
