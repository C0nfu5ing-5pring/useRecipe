import { createContext, useState } from "react";

export const recipescontext = createContext();

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  return (
    <recipescontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipescontext.Provider>
  );
};

export default RecipeContext;
