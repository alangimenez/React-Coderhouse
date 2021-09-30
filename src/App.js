import NavBar from "./components/navbar/NavBar.js"
import Footer from "./components/footer/Footer.js"
import ItemListContainer from "./components/item-list-container/ItemListContainer.js";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Contacto from "./components/sections/Contacto.js";
import Cursos from "./components/sections/Cursos.js";
import PruebaDeNivel from "./components/sections/PruebaDeNivel.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer.js";
import Index from "./components/sections/Index.js";
import ItemListContainerFilter from "./components/sections/ItemListContainerFilter.js";
import { DatosContextProvider } from "./components/context/CartContext.js";
import Cart from "./components/sections/Cart.js";

function App() {
  return (
    <DatosContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/libros">
              <ItemListContainer />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/cursos">
              <Cursos />
            </Route>
            <Route path="/pruebadenivel">
              <PruebaDeNivel />
            </Route>
            <Route path="/libros/producto">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/libros/:idioma">
              <ItemListContainerFilter />
            </Route>
            <Route path="/libros/particular/:book">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </DatosContextProvider>
  );
}

export default App;
