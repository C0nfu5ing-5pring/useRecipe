import { useContext } from "react";
import { recipescontext } from "../context/RecipeContext";

const Recipes = () => {
  let { data } = useContext(recipescontext);

  return data.length === 0 ? (
    <div className="flex items-center justify-center min-h-[80vh] bristol text-[#2F2F2F]">
      <h1 className="text-3xl sm:text-5xl md:text-7xl select-none">
        NO RECIPES ADDED YET.
      </h1>
    </div>
  ) : (
    <div className="bristol uppercase px-5 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((recipe, idx) => {
        let ingredients = recipe.ingredients.split(",");

        return (
          <div
            key={idx}
            className="max-w-md max-h-[55vh] overflow-auto w-full bg-[#FFF8D6] border-2 border-[#2f2f2f] rounded-2xl shadow-lg p-6 space-y-4 rotate-[-1deg] transition hover:scale-[1.01] duration-300"
          >
            <div className="h-48 bg-gray-300 rounded-xl overflow-hidden">
              <img className="bg-cover" src={recipe.url} alt={recipe.title} />
            </div>

            <div>
              <h2 className="text-3xl mb-2 sm:text-4xl font-bold text-[#2f2f2f] tracking-tight">
                {recipe.title}
              </h2>
              <p className="text-[#E4572E] mb-4 font-semibold text-xl sm:text-2xl uppercase">
                Chef: {recipe.chef}
              </p>
              <p className="text-[#2f2f2f] text-xl md:text-2xl line-clamp-3">
                <span className="text-[#e4572e]">Description: </span>
              </p>
              <p>
                {recipe.description.slice(0, 30)}... <small>more</small>{" "}
              </p>
            </div>

            <div className="text-sm text-[#2f2f2f]">
              <p>
                <span className="text-[#e4572e] text-xl md:text-2xl">
                  Ingredients:
                </span>
              </p>
              {ingredients.map((ingredient, idx) => {
                return (
                  <span
                    key={idx}
                    className="inline-block cursor-pointer hover:bg-[#FAe3B1] bg-[#FAF0B3] text-[#2f2f2f] text-sm font-medium px-3 py-1 rounded-full border border-[#2f2f2f] mr-2 mb-2 rotate-[-1deg] shadow-sm"
                  >
                    {ingredient}
                  </span>
                );
              })}
            </div>

            <div className="text-sm text-[#2f2f2f]">
              <p>
                <span className="text-[#e4572e] text-xl md:text-2xl">
                  Instructions:
                </span>
              </p>
              <p className="whitespace-pre-line font-[500] text-[#2f2f2f] text-[15px] leading-relaxed tracking-tight font-handdrawn">
                {recipe.instructions}
              </p>
            </div>

            <span className="bg-[#FAF0B3] px-3 py-1 rounded-lg font-semibold text-[#2f2f2f] border border-[#2f2f2f] rotate-[1deg] shadow-sm">
              {recipe.category}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
