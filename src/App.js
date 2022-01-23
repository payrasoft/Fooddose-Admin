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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="all-merchants" element={<AllMerchants />}> </Route>
        </Routes>
        <Routes>
          <Route path="add-merchants" element={<AddMerchants />}> </Route>
        </Routes>
        <Routes>
          <Route path="pending-merchants" element={<PendingMerchants />}> </Route>
        </Routes>
        <Routes>
          <Route path="rejected-merchants" element={<RejectedMerchants />}> </Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard />}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
