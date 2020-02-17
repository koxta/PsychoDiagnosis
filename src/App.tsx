import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import {Roter} from "./Screens";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/roter" exact component={Roter} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
