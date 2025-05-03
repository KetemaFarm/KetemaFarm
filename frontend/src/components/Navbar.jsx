import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const numItemsInCart = useSelector((store) => store.cartState.numItemsInCart);
  return (
    <>
      <div className="relative z-40">
        <nav className="glass bg-black opacity-80">
          <div className="navbar mx-auto max-w-6xl px-2">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <FaBarsStaggered className="h-6 w-6" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52"
                >
                  <NavLinks />
                </ul>
              </div>
              <div className="hidden lg:flex lg:items-center">
                <ul className="menu menu-horizontal">
                  <NavLinks />
                </ul>
              </div>
            </div>

            <div className="navbar-end mr-6">
              <NavLink
                to="cart"
                className="btn bg-green-600 btn-circle btn-md ml-4"
              >
                <div className="indicator ">
                  <BsCart3 className="h-6 w-6" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    {numItemsInCart}
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
