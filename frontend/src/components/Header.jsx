import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-xl text-neutral-content">
      <div className="w-full  flex flex-row p-1 font-['Kanit']  justify-center  bg-green-700">
        <div className="flex gap-x-6 justify-center items-center text-black">
          <Link
            to="/login"
            className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-950 underline transition delay-10"
          >
            Sign in / Guest
          </Link>
          <Link
            to="/register"
            className="link link-hover text-xs sm:text-sm text-gray-300 hover:text-gray-950 underline transition delay-10"
          >
            Create an Account
          </Link>
        </div>
      </div>
      <div className="px-8 flex-col flex justify-between items-center">
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
