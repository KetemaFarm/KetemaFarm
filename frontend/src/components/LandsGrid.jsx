import { Link, useLoaderData } from "react-router-dom";

const LandsGrid = () => {
  // const { lands } = useLoaderData();
  const lands = [
    {
      id: 1,
      title: "Sunny Rooftop in Bole",
      description:
        "Perfect rooftop space with direct sunlight, ideal for small-scale vegetable farming.",
      location: "Bole, Addis Ababa",
      image: "https://example.com/images/rooftop1.jpg",
      category: "rooftop",
      price: 1000,
    },
    {
      id: 2,
      title: "Balcony Space in Condominium",
      description: "Cozy balcony space suitable for herb and vertical farming.",
      location: "CMC, Addis Ababa",
      image: "https://example.com/images/balcony1.jpg",
      category: "balcony",
      price: 500,
    },
    {
      id: 3,
      title: "Backyard Land for Lease",
      description: "100 sqm land available for planting seasonal crops.",
      location: "Sarbet, Addis Ababa",
      image: "https://example.com/images/land1.jpg",
      category: "land",
      price: 2500,
    },
  ];

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {lands.map((land) => {
        const { title, price, image } = land;
        return (
          <Link
            key={land.id}
            to={`/lands/${land.id}`}
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
export default LandsGrid;
