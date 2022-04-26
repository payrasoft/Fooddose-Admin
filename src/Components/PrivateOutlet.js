import { Outlet, Navigate } from "react-router-dom";

const PrivateOutlet = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
