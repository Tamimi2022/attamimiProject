import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./component/Menu";
import SingleDrink from "./component/SingleDrink";
import Error from "./component/Error";
import Navbar from "./component/Navbar";

function App () {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/cocktail/:id">
          <SingleDrink />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
export default App