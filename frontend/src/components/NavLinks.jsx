import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "courses", text: "courses" },
  { id: 4, url: "products", text: "products" },
  { id: 5, url: "tools", text: "tools" },
  { id: 6, url: "lands", text: "Land listings" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive
                  ? "capitalize text-white font-bold"
                  : "capitalize text-white font-medium tracking-wider"
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
