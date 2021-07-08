import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "./components/Init";
import Tablets from "./components/Tablets";
import Kitchen from "./components/Kitchen";
import NotFound from "./components/Notfound";
import Menu from "./components/Menu";
import productos from "./productos.json";



const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Init} />
        <Route exact path="/Tablets" component={Tablets} />
        <Route exact path="/Menu">
            <Menu productos={productos}/>
            
        </Route>
        <Route exact path="/Kitchen" component={Kitchen} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
