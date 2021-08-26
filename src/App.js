import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

import { client } from "./api/anilist-v2";

import Header from "./components/Header";

import Home from "./pages/Home";
import Title from "./pages/Title";
import Search from "./pages/Search";
import PageNotFound from "./pages/404";
import { useDarkMode } from "./hooks";
import ScrollToTopOnPathname from "./components/RouterUtils/ScrollToTopOnPathname";

const App = () => {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <GlobalStyle />
        <ApolloProvider client={client}>
        <ScrollToTopOnPathname />
          <Header darkModeToggler={toggle} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/title/:id" component={Title} />
            <Route exact path="/search" component={Search} />
            <Route component={PageNotFound} />
          </Switch>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
