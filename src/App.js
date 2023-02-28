import './style.css';
import './NavBar.css';
import './Brand.css';
import './CartWidget.css';
import './ItemListContainer.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element= { <ItemListContainer/> }/>
      <Route path='/item/:idItem' element= { <ItemDetailContainer/> }/>
      <Route path='/category/:idCategory' element= { <ItemListContainer/> }/>
    </Routes>
  </BrowserRouter>
   
  </>
  );
}

export default App;
