import React from "react";

const categories = [
  "General Farming Tutorials",
  "planting & Growing",
  "Maintenance & Care",
  "Harvesting & Post-Harvest",
];
function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside className="w-64 bg-white p-4 shadow-sm flex-shrink-0 mt-30">
      <h2 className="text-sm font-semibold text-gray-500 uppwecase mb-4">
        Catagories
      </h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-3 py-1 rounded text-gray-700 hover:bg-gray-100 ${
                selectedCategory === category ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
