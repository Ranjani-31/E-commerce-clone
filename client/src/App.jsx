import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductListing from "./pages/ProductListing"
import ProductView from './pages/ProductView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/login' element={<Login />}/>

        <Route path = '/ProductListing' element={<ProductListing />}/>
        <Route path = '/ProductView' element={<ProductView />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
