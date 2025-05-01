import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-xl py-2 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8 flex justify-center sm:justify-end pb-4">
        <div className="flex gap-x-6 justify-center items-center text-black">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create an Account
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center">
        <img src={logo} alt="logo" />
        <Search />
        <div className="flex items-center">
          <Link to="login" className="bg-green-600 py-2 px-4 rounded-sm">
            Sell Produce
          </Link>
          <span className="text-3xl px-4 text-green-600">/</span>
          <Link to="login" className="bg-green-600 py-2 px-4 rounded-sm">
            Post Land
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
