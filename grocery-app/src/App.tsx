import React from "react";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./config/api";

// APP
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./domains/app/components";
import Routes from "./domains/app/routes";

const App: React.FC = () => {
  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
