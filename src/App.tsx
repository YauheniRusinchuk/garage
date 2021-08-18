import * as React from "react";
import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  const a = 10;

  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
