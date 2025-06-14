import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-[80vh] flex flex-col gap-5 justify-center items-center ">
        <h1 className="bristol select-none text-[#2f2f2f] text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[15rem]">
          useRecipe
        </h1>
        <p className="bristol select-none text-[#E4572E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Hook into better cooking
        </p>
        <NavLink
          to="/create-recipe"
          className="bristol cursor-pointer text-white bg-[#2AB6A5] px-6 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl  rounded-[2rem] shadow-md transition-all duration-300 border-2 active:scale-95 border-[#2f2f2f] rotate-[-2deg] skew-x-3"
        >
          Create Recipe
        </NavLink>
      </div>

      <input type="text" inputMode="numeric" pattern="[0-9]*" />
    </>
  );
};

export default Home;
