import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import NavState from "../contexts/nav-context";

function Root() {
  return (
    <NavState>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </NavState>
  );
}

export default Root;
