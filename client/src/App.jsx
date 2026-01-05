import {Router, Routes, Route} from "react-dom"

import Home from "../src/pages/Home"
import Login from "../src/pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/login' element={<Login />}/>

      </Routes>
    </Router>
  );
}

export default App;
