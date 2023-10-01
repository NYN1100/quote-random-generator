import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./Firebase";

const PrivateRoute = () => {
  const [authorised, setAuthorised] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthorised(true);
    }
    if (!user) {
      setAuthorised(false);
    }
  });
  return authorised ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
