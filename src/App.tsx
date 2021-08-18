import * as React from "react";
import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";

const App: React.FC = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
