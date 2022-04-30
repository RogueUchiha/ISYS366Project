import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import app from "../src/firebase.config";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import ProductManagment from "./pages/ProductManagment";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/manageproducts" element={<ProductManagment />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
