import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Treading from "./treading";
import Moostweek from "./mostweek";
import Transaction from "./transaction";
import Header from "./header";

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Header />
            <div className="home-page">
              <Treading />
              <Moostweek />
              <Transaction />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;