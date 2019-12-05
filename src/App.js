import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const MobilesPage = () => <div>mobiles</div>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop/smart_phones" component={MobilesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
