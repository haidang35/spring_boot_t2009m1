import { useLayoutEffect } from "react";
import styles from '../styles/Layout.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import Script from "./Script";

const FullLayout = () => {
  return (
    <>
      {/* <Header />
      <Menu /> */}
      <div className="body-wrapper">
        <Outlet />
        <Footer />
      </div>
      <Script />
    </>
  );
};

export default FullLayout;
