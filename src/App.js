import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import SearchBar from "./components/searchBar/SearchBar";

import Home from "./pages/homepage/Home";
import PageOne from "./components/infoSection/PageOne";
import PageTwo from "./components/infoSection/PageTwo";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <SearchBar />
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/whatwedo" exact Component={PageOne} />
          <Route path="/thedigitaldivide" exact Component={PageTwo} />
          <Route path="/getinvolved" exact Component={PageTwo} />
          <Route path="/ournetwork" exact Component={PageTwo} />
          <Route path="/insights" exact Component={PageTwo} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
