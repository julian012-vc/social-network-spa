import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Feed from "./modules/pages/feed/Feed";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
