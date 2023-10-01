import Header from "./components/Header";
import React, { useContext, useEffect } from "react";
import HeroPage from "./components/Hero";
import Routers from "./router";
import { AuthContext } from "./components/AuthContext";
import { useNavigate } from "react-router-dom";
function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
