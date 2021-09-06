import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <>
      <ToastContainer autoClose={3000} pauseOnHover={false} theme="dark" />
      {children}
    </>
  );
}

export default Layout;
