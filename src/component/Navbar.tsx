import { SlUser } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
import { useContext } from "react";
const Navbar = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Cart must be used within a MyContext.Provider");
  }

  const { cart } = context;

  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to={"./home"}>
        <img
          src="data:image/png;base64,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"
          className="size-[60px] mx-10 mt-7"
        />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="mx-2">
            <Link to={"./ladies"}>Ladies</Link>
          </li>
          <li className="mx-2">
            <Link to={"./men"}>Men</Link>
          </li>
        
        </ul>
      </div>
      <div className="flex mr-5">
        <Link to={"./signin"}>
          <div className="flex  items-center">
            <SlUser />
            <button className="ml-2">Sign in</button>
          </div>
        </Link>
        <Link to={"./cart"}>
          <div className="flex  items-center mx-2">
            <MdOutlineShoppingBag />
            <button className="ml-2">Shopping bag({cart.length})</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
