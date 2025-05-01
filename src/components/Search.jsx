import { CiSearch } from "react-icons/ci";


const Search = () => {
  return (
    <form className="relative">
      <CiSearch className="absolute text-xl top-3 left-1" />
      <input
        type="text"
        className="py-1.5 px-8 focus:outline-none border-2"
        placeholder="Search"
      />
      <button type="submit" className="bg-green-600 py-2 px-4 border-2">
        Search
      </button>
    </form>
  );
};

export default Search;
