import * as React from "react";
import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import "./App.scss";
import { GlobalProvider } from "./store/state";

const App: React.FC = (): JSX.Element => {
  const a = 10;

  return (
    <>
      <GlobalProvider>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
};

export default App;
