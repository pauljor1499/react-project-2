import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import CartDetails from "./components/cart/CartDetails";
import Products from "./components/products/Products";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./components/landing_page/LandingPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/cart" element={<CartDetails />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
