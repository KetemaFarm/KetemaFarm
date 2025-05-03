import { Link } from "react-router-dom";
import hero from "../assets/heroImg.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center">
      <div className="mx-3 ">
        <h1 className="text-4xl font-bold text-center tracking-tight  sm:text-5xl font-['Montserrat'] ">
          Your Urban Farming Marketplace – Grow, Sell, Thrive!
        </h1>

        <p className="mt-8  leading-6 font-['Montserrat'] text-sm mx-8 text-center">
          Buy fresh farm products, rent urban land, or sell your harvest – all
          in one place." "Join as a buyer, landowner, or seller to grow your
          city’s green future.
        </p>
        <div className="mt-10   flex flex-row gap-4 justify-center">
          <Link
            to="products"
            className="btn btn-primary font-['Kanit'] bg-green-900 border-1 border-green-900"
          >
            Browse Products
          </Link>
          <Link
            to="lands"
            className="btn btn-primary font-['Kanit'] bg-green-900 border-1 border-green-900"
          >
            VIew Land Listings
          </Link>
        </div>
      </div>
      <img src={hero} alt="hero Image" className="w-200" />
    </div>
  );
};
export default Hero;
