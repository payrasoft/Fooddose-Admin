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

          <Route path="all-order" element={<AllOrder />}> </Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
