import { Link, useLoaderData } from "react-router-dom";

const ToolsGrid = () => {
  // const { tools } = useLoaderData();
  const tools = [
    {
      id: 1,
      title: "Tool 1",
      description: "This is a high-quality tool 1 for urban farming.",
      category: "pesticide",
      price: 35.76,
      location: "Jimma",
      image: "https://example.com/tool_images/tool_1.jpg",
    },
    {
      id: 2,
      title: "Tool 2",
      description: "This is a high-quality tool 2 for urban farming.",
      category: "starter-kit",
      price: 64.11,
      location: "Dessie",
      image: "https://example.com/tool_images/tool_2.jpg",
    },
    {
      id: 3,
      title: "Tool 3",
      description: "This is a high-quality tool 3 for urban farming.",
      category: "fertilizer",
      price: 60.46,
      location: "Mekelle",
      image: "https://example.com/tool_images/tool_3.jpg",
    },
  ];

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const { title, price, image } = tool;
        return (
          <Link
            key={tool.id}
            to={`/tools/${tool.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-productName capitalize tracking-wider">
                {title}
              </h2>
              <span className="text-secondary">{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ToolsGrid;
