import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedNavbar;
