import { Link } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <section className="py-24">
      <div>
        <h1 className="text-2xl font-bold">Featured Marketplace Products</h1>
        <ProductsGrid />
      </div>
      <div className="py-8 mx-auto flex items-center">
        <Link
          to="products"
          className="capitalize px-4 py-2 bg-green-600 text-white inline-block mx-auto rounded-lg"
        >
          View all produce
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProducts;
