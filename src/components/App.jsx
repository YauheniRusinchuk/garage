import React from "react";
import Header from "./wrappers/Header.jsx";
import "../styles/App.scss";
import "../styles/reset.css";

import Footer from "./wrappers/Footer.jsx";
import Main from "./wrappers/Main.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
