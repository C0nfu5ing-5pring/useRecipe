import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bristol flex flex-wrap justify-center items-center gap-3 sm:gap-6 px-2 py-15 w-full text-[#2f2f2f] text-2xl xs:text-base sm:text-2xl md:text-3xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#E4572E]" : "hover:text-[#E4572E] transition-colors"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "text-[#E4572E]" : "hover:text-[#E4572E] transition-colors"
        }
      >
        RECIPES
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          isActive ? "text-[#E4572E]" : "hover:text-[#E4572E] transition-colors"
        }
      >
        CREATE
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) =>
          isActive ? "text-[#E4572E]" : "hover:text-[#E4572E] transition-colors"
        }
      >
        FAVS
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#E4572E]" : "hover:text-[#E4572E] transition-colors"
        }
      >
        ABOUT
      </NavLink>
    </div>
  );
};

export default Navbar;
