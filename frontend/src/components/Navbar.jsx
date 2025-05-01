import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <div className="relative z-40">
        <nav className="glass bg-black opacity-80">
          <div className="navbar mx-auto max-w-6xl px-8">
            <div className="navbar-start">
              {/* DROPDOWN */}
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
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
