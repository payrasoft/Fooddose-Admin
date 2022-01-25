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
import AddNotice from "./Components/Notice/AddNotice";
import AllNotice from "./Components/Notice/AllNotice";
import AllRider from "./Components/Rider/AllRider";
import PendingRider from "./Components/Rider/PendingRider";
import RejectedRider from "./Components/Rider/RejectedRider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="all-merchants" element={<AllMerchants />} />
          <Route path="add-merchants" element={<AddMerchants />} />
          <Route path="pending-merchants" element={<PendingMerchants />} />
          <Route path="rejected-merchants" element={<RejectedMerchants />} />

          <Route path="all-order" element={<AllOrder />} />

          <Route path="all-rider" element={<AllRider />} />
          <Route path="pending-rider" element={<PendingRider />} />
          <Route path="rejected-rider" element={<RejectedRider />} />
          
          <Route path="add-notice" element={<AddNotice />} />
          <Route path="all-notice" element={<AllNotice />} />

          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
