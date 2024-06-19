import Context from "../Context";
import Cart from "../pages/Cart.tsx/Cart";
import Home from "../pages/Home";
import Ladies from "../pages/ladies/Ladies";
import TopsDetails from "../pages/ladies/TopsDetails";
import Member from "../pages/Member";
import Mens from "../pages/mens/Mens";
import SignIn from "../pages/SignIn";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <><Context>
      <Navbar />

      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ladies" element={<Ladies />}></Route>
        <Route path="/topdetails/:id" element={<TopsDetails />}></Route>
        <Route path="/men" element={<Mens />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      </Context>
    </>
  );
};

export default Layout;
