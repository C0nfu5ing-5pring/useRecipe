import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bristol pt-18 text-[#2f2f2f] pb-10 h-20 gap-9 text-lg sm:text-3xl flex justify-center items-center w-full">
        <NavLink
          to="/"
          className={(e) =>
            e.isActive
              ? "text-[#E4572E]"
              : "hover:text-[#E4572E] transition-colors"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/recipes"
          className={(e) =>
            e.isActive
              ? "text-[#E4572E]"
              : "hover:text-[#E4572E] transition-colors"
          }
        >
          RECIPES
        </NavLink>
        <NavLink
          to="/create-recipe"
          className={(e) =>
            e.isActive
              ? "text-[#E4572E]"
              : "hover:text-[#E4572E] transition-colors"
          }
        >
          CREATE RECIPES
        </NavLink>
        <NavLink
          to="/about"
          className={(e) =>
            e.isActive
              ? "text-[#E4572E]"
              : "hover:text-[#E4572E] transition-colors"
          }
        >
          ABOUT
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
