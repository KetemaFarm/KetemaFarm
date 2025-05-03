import { Link } from "react-router-dom";
import LandsGrid from "./LandsGrid";

const FeaturedLands = () => {
  return (
    <section className="py-24">
      <div>
        <h1 className="text-2xl font-bold">Featured Land Listings</h1>
        <LandsGrid />
      </div>
      <div className="py-8 mx-auto flex items-center">
        <Link
          to="lands"
          className="capitalize px-4 py-2 bg-green-600 text-white inline-block mx-auto rounded-lg"
        >
          View all lands
        </Link>
      </div>
    </section>
  );
};
export default FeaturedLands;
