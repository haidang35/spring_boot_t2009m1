import { useLayoutEffect } from "react";
import styles from "./App.css";
import Home from "./modules/home/Home";
import Footer from "./shared/layouts/Footer";
import Header from "./shared/layouts/Header";
import Menu from "./shared/layouts/Menu";
import Script, { AddLibrary } from "./shared/layouts/Script";

function App() {
  useLayoutEffect(() => {
    AddLibrary("/js/main.js");
    AddLibrary("/js/plugins.js");
  }, []);
  return (
    <>
      <Header />
      <Menu />
      <div className="body-wrapper">
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
