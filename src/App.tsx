import React from "react";

import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./domains/app/components";
import Routes from "./domains/app/routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
