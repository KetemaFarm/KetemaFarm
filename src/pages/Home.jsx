import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await axios.get("http://localhost:8080/products");
  console.log(response);
  return response.data;
};

const Home = () => {
  const  data  = useLoaderData();
  console.log(data);
  return <div className="h-screen bg-green-50">Home</div>;
};
export default Home;
