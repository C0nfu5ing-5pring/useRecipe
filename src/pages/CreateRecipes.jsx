import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipescontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  let navigate = useNavigate();
  const { data, setdata } = useContext(recipescontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    let copyData = [...data];
    copyData.push(recipe);
    setdata(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success(
      <div className="p-4 bristol uppercase rounded-xl bg-[#FAF0B3] border-2 border-[#2f2f2f] shadow-md">
        <h3 className="text-[#E4572E] font-bold">Recipe Uploaded!</h3>
        <p className="text-sm text-[#2f2f2f]">Check it on the recipe board.</p>
      </div>
    );
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex bristol justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="p-10 h-[75vh] overflow-auto scrollbar text-center rounded-[2rem] border-4 border-[#2f2f2f] bg-[#FAF0B3] shadow-xl rotate-[-1deg]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2f2f2f] mb-2">
          MAKE A NEW RECIPE
        </h1>
        <hr className="border-dashed border-t-2 border-[#2f2f2f] my-4" />
        <h4 className="text-lg sm:text-xl md:text-2xl text-[#E4572E] font-semibold mb-6 rotate-[-1deg]">
          LET THE WORLD TASTE YOUR GENIUS
        </h4>
        <hr className="border-dashed border-t-2 border-[#2f2f2f] my-4" />
        <input
          type="url"
          placeholder="Enter url..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("url")}
        />

        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.url?.message}
        </small>
        <input
          type="text"
          placeholder="Give it a title..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
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
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("chef", {
            require: "Chef's name is required",
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
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("description", { required: "Description is required" })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.description?.message}
        </small>
        <textarea
          type="text"
          placeholder="Enter ingredients seperated by comma ..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("ingredients", { required: "Ingredients are required" })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.ingredients?.message}
        </small>
        <textarea
          type="text"
          placeholder="Enter instructions..."
          className="w-full bg-[#FFF8D6] px-5 py-2 text-base sm:text-lg md:text-xl uppercase placeholder-[#9e9e9e] text-[#2f2f2f] border-3 border-[#2f2f2f] rounded-[1rem] shadow-sm outline-none focus:ring-1 skew-x-2 transition-all"
          {...register("instructions", {
            required: "Instructions are required",
          })}
        />
        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.instructions?.message}
        </small>

        <select
          {...register("category", { required: "Category is required" })}
          className="w-full bg-[#FFF8D6] mt-4 px-5 py-3 text-[#2f2f2f] border-[2.5px] border-[#2f2f2f] rounded-[1rem] cursor-pointer uppercase tracking-wide rotate-[-1deg] appearance-none relative focus:outline-none text-base sm:text-lg md:text-xl"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <small className="text-[#E4572E] mb-4 font-bold block mt-1 ml-1 text-sm sm:text-base md:text-lg rotate-[-1deg]">
          {errors?.category?.message}
        </small>

        <button
          type="submit"
          className="mt-6 mx-auto block px-8 py-3 bg-[#F45D01] text-white tracking-wide text-lg rounded-[1rem] cursor-pointer border-[2px] border-[#2f2f2f] transition-transform active:scale-90 rotate-[-1deg]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
