import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipescontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipescontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      url: recipe?.url,
      category: recipe?.category,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
      description: recipe?.description,
      chef: recipe?.chef,
    },
  });

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        url: recipe.url,
        category: recipe.category,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        description: recipe.description,
        chef: recipe.chef,
      });
    }
  }, [recipe, reset]);

  let SubmitHandler = (recipe) => {
    let index = data.findIndex((recipe) => params.id === recipe.id);
    let copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success(
      <div className="p-4 bristol uppercase rounded-xl bg-[#FAF0B3] border-2 border-[#2f2f2f] shadow-md">
        <h3 className="text-[#E4572E] font-bold">Recipe Updated!</h3>
      </div>
    );
  };

  let DeleteHandler = () => {
    let filterData = data.filter((recipe) => recipe.id != params.id);
    let updatedFav = favourite.filter((fav) => fav.id != params.id);

    setdata(filterData);
    setFavourite(updatedFav);

    localStorage.setItem("fav", JSON.stringify(updatedFav));
    localStorage.setItem("recipes", JSON.stringify(filterData));

    toast.success(
      <div className="p-4 bristol uppercase rounded-xl bg-[#FAF0B3] border-2 border-[#2f2f2f] shadow-md">
        <h3 className="text-[#E4572E] font-bold">Recipe Deleted!</h3>
      </div>
    );
    navigate("/recipes");
  };

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  let FavHandler = () => {
    if (!favourite.some((fav) => fav.id == params.id)) {
      let copyFav = [...favourite];
      copyFav.push(recipe);
      setFavourite(copyFav);
      localStorage.setItem("fav", JSON.stringify(copyFav));
    }
  };

  let UnfavHandler = () => {
    let filterFav = favourite.filter((fav) => fav.id != recipe?.id);
    setFavourite(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  return recipe ? (
    <div className="bristol relative uppercase px-6 py-12 sm:px-12 lg:px-32 text-[#2f2f2f]">
      <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-md mb-8">
        <img
          src={
            recipe.url
              ? recipe.url
              : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={recipe.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-2 break-words w-full">
            {recipe.title}
          </h1>

          {favourite.find((fav) => fav.id == recipe.id) ? (
            <i
              onClick={UnfavHandler}
              className="ri-heart-fill text-2xl sm:text-3xl lg:text-4xl cursor-pointer text-[#e7542e] mt-1"
            ></i>
          ) : (
            <i
              onClick={FavHandler}
              className="ri-heart-line text-2xl sm:text-3xl lg:text-4xl cursor-pointer text-[#e7542e] mt-1"
            ></i>
          )}
        </div>

        <p className="text-xl sm:text-2xl text-[#E4572E] font-semibold uppercase">
          By {recipe.chef}
        </p>
      </div>

      <div className="mb-8">
        <span className="inline-block bg-[#FAF0B3] px-4 py-2 rounded-full font-semibold border border-[#2f2f2f] rotate-[1deg] shadow-sm">
          {recipe.category}
        </span>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#e4572e] mb-2">
          Description
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          {recipe.description}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#e4572e] mb-4">
          Ingredients
        </h2>
        <div className="flex flex-wrap gap-3">
          {recipe.ingredients.split(",").map((ingredient, idx) => {
            return (
              <span
                key={idx}
                className="inline-block bg-[#FAF0B3] px-3 py-1 rounded-full border border-[#2f2f2f] text-sm font-medium rotate-[-1deg] shadow-sm"
              >
                {ingredient}
              </span>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#e4572e] mb-4">
          Instructions
        </h2>
        <p className="whitespace-pre-line text-base sm:text-lg leading-relaxed tracking-tight font-handdrawn">
          {recipe.instructions}
        </p>
      </div>

      <hr className="my-10 text-[#2f2f2f] border-2 rotate-[-1deg]" />

      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full max-w-2xl mx-auto p-10 h-[90vh] overflow-auto scrollbar text-center rounded-[2rem] border-4 border-[#2f2f2f] bg-[#FAF0B3] shadow-xl rotate-[-1deg]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2f2f2f] mb-2">
          Update or delete
        </h1>
        <hr className="border-dashed border-t-2 border-[#2f2f2f] my-4" />
        <input
          type="url"
          placeholder="Enter url..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] rotate-[-1deg] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("url")}
        />

        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.url?.message}
        </small>
        <input
          type="text"
          placeholder="Give it a title..."
          className="w-full bg-[#FFF8D6] px-5 py-2 rotate-[-1deg] text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("title", {
            required: "Title is required",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 50, message: "Too long" },
          })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.title?.message}
        </small>
        <input
          type="text"
          placeholder="Chef's name..."
          className="w-full bg-[#FFF8D6] px-5 py-2 rotate-[-1deg] text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("chef", {
            required: "Chef's name is required",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 60, message: "Too long" },
          })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.chef?.message}
        </small>
        <textarea
          type="text"
          placeholder="Enter description..."
          className="w-full bg-[#FFF8D6] px-5 py-2 rotate-[1deg] text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("description", { required: "Description is required" })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.description?.message}
        </small>
        <textarea
          type="text"
          placeholder="Enter ingredients seperated by comma ..."
          className="w-full bg-[#FFF8D6] px-5 py-2 rotate-[-1deg] text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("ingredients", { required: "Ingredients are required" })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.ingredients?.message}
        </small>
        <textarea
          type="text"
          placeholder="Enter instructions..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base rotate-[1deg] sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("instructions", {
            required: "Instructions are required",
          })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.instructions?.message}
        </small>

        <select
          {...register("category", { required: "Category is required" })}
          className="w-full bg-[#FFF8D6] mt-2 px-5 py-3 text-[#2f2f2f] border-[2.5px] border-[#2f2f2f] rounded-[1rem] cursor-pointer uppercase tracking-wide rotate-[-1deg] appearance-none relative focus:outline-none text-base sm:text-lg md:text-xl"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.category?.message}
        </small>

        <div className="flex flex-col sm:flex-row">
          <button
            type="submit"
            className="mt-6 hover:scale-105 mx-auto block px-8 py-3 bg-[#F45D01] text-white tracking-wide text-lg rounded-[1rem] cursor-pointer border-[2px] border-[#2f2f2f] transition-transform active:scale-90 rotate-[-1deg]"
          >
            UPDATE
          </button>

          <button
            type="submit"
            onClick={DeleteHandler}
            className="mt-6 hover:sclae-105 mx-auto block px-8 py-3 bg-[#F45D01] text-white tracking-wide text-lg rounded-[1rem] cursor-pointer border-[2px] border-[#2f2f2f] transition-transform active:scale-90 rotate-[-1deg]"
          >
            DELETE
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="bristol flex justify-center items-center min-h-[80vh] select-none text-4xl sm:text-5xl lg:text-6xl">
      Loading recipes...
    </div>
  );
};

export default SingleRecipe;
