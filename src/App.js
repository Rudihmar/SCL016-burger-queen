import  { React, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "./components/Init";
import Tablets from "./components/Tablets";
import Kitchen from "./components/Kitchen";
import NotFound from "./components/Notfound";
import Menu from "./components/Menu";
import productos from "./productos.json";
import Comanda from "./components/Comanda";




const App = () => {
  const [comanda, cambiarComanda] = useState([]);
  const agregarProductoAComanda = (idProductoAAgregar, nombre) => {
    if(comanda.length === 0) {
      cambiarComanda([{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]);
      console.log(idProductoAAgregar, nombre)
    }else {
      const nuevaComanda = [...comanda];
      const yaEstaEnComanda = nuevaComanda.filter((productosDeComanda) => {
        return productosDeComanda.id === idProductoAAgregar
      }).length > 0;

      if(yaEstaEnComanda) {
        nuevaComanda.forEach((productoDeComanda, index) => {
          if(productoDeComanda.id === idProductoAAgregar) {
            const cantidad = nuevaComanda[index].cantidad;
            nuevaComanda[index] = {id: idProductoAAgregar, nombre: nombre, cantidad: cantidad + 1}
          }
        })
      }
    }
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Init} />
        <Route exact path="/Tablets" component={Tablets} />
        <Route exact path="/Menu">
          <Menu productos={productos} agregarProductoAComanda={agregarProductoAComanda} />
          <Comanda comanda={comanda} />
        </Route>
        <Route exact path="/Kitchen" component={Kitchen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
