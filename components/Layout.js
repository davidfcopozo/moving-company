import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsAppIcon from "./WhatsAppIcon";
import { SuccessProvider } from "../context/FormSuccessContext";

const Layout = ({ children }) => {
  const mainStyles = {
    display: "flex",
    alignContent: "center",
    backgroundColor: "#FAFAFA",
  };

  return (
    <>
      <SuccessProvider>
        <Header />
        <div>
          <main style={mainStyles}>{children}</main>
        </div>
        <Footer />
        <WhatsAppIcon />
      </SuccessProvider>
    </>
  );
};

export default Layout;
