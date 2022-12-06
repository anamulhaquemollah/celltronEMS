import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import "./App.css"; 
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home"; 
import Login from "./pages/Login";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      {/* <Login /> */}
     <Products/>
     hello
    </BrowserRouter>
    
  )

}

export default App