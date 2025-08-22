import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import ProductDetails from "./Components/ProdDetail";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
