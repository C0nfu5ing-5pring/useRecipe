import Navbar from "./components/Navbar";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
