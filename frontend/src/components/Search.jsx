import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className="relative flex flex-row">
      <CiSearch className="absolute text-xl top-3 left-1" />
      <input
        type="text"
        className=" w-50 h-8 rounded-l-md focus:outline-none border-2 border-gray-300 font-['Kanit'] text-xs pl-2 text-gray-400"
        placeholder="Search"
      />
      <button
        type="submit"
        className="bg-green-700  font-['Rubik'] h-8 flex flex-row justify-center items-center text-xs p-1 w-20 rounded-r-md "
      >
        Search
      </button>
    </form>
  );
};

export default Search;
