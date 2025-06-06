import { useContext } from "react";
import { recipescontext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

const Recipes = () => {
  let { data } = useContext(recipescontext);

  return data.length === 0 ? (
    <div className="flex items-center justify-center min-h-[80vh] bristol text-[#2F2F2F]">
      <h1 className="text-3xl sm:text-5xl md:text-7xl select-none">
        NO RECIPES ADDED YET.
      </h1>
    </div>
  ) : (
    <div className="bristol uppercase px-15 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((recipe, idx) => {
        return (
          <Link
            to={`/recipes/details/${recipe.id}`}
            key={idx}
            className="max-w-md max-h-[55vh] overflow-auto w-full bg-[#FFF8D6] border-2 border-[#2f2f2f] rounded-2xl shadow-lg p-6 space-y-4 rotate-[-1deg] transition hover:scale-[1.01] duration-300"
          >
            <div className="h-48 bg-gray-300 rounded-xl overflow-hidden">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden border-2 border-[#2f2f2f] rotate-[-1deg] shadow-md">
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    recipe.url
                      ? recipe.url
                      : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={recipe.title}
                />

                <div className="absolute z-10 inset-0 pointer-events-none opacity-[0.08] grain mix-blend-multiply"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl mb-2 sm:text-4xl font-bold text-[#2f2f2f] tracking-tight">
                {recipe.title.slice(0, 12)}...
              </h2>
              <p className="text-[#E4572E] mb-4 font-semibold text-xl sm:text-2xl uppercase">
                Chef: <span className="text-[#2f2f2f]">{recipe.chef}</span>
              </p>
              <p className="text-[#2f2f2f] text-xl md:text-2xl line-clamp-3">
                <span className="text-[#e4572e]">Description: </span>
              </p>
              <p>
                {recipe.description.slice(0, 30)}...{" "}
                <small className="text-[#e4572e]  underline">more</small>{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
