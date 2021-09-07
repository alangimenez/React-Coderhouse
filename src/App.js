import NavBar from "./components/navbar/NavBar.js"
import Footer from "./components/footer/Footer.js"
import ItemListContainer from "./components/item-list-container/ItemListContainer.js";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer  name="prop de prueba" />
      <Footer></Footer>
    </div>
  );
}

export default App;
