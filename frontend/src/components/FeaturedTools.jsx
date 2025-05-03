import { Link } from "react-router-dom";
import ToolsGrid from "./ToolsGrid";

const FeaturedTools = () => {
  return (
    <section className="py-24">
      <div>
        <h1 className="text-2xl font-bold">Featured Tools</h1>
        <ToolsGrid />
      </div>
      <div className="py-8 mx-auto flex items-center">
        <Link
          to="tools"
          className="capitalize px-4 py-2 bg-green-600 text-white inline-block mx-auto rounded-lg"
        >
          View all tools
        </Link>
      </div>
    </section>
  );
};
export default FeaturedTools;
