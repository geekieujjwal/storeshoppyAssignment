import React from "react";
import Header from "./header";
import Sidebar from "./sideBar";
import ContactUs from "./contactUs/ContactUs";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Header />
      <ContactUs />
      <main className=" pl-10 text-sm">{children}</main>
    </div>
  );
};

export default Layout;
