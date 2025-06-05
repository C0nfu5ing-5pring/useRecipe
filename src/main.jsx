import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RecipeContext from "./context/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        toastClassName="bg-[#FFF8D6] border-2 border-[#2f2f2f] text-[#2f2f2f] rounded-xl font-medium"
        bodyClassName="text-md"
        newestOnTop
        progressClassName="bg-[#E4572E]"
      />
    </BrowserRouter>
  </RecipeContext>
);
