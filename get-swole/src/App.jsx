import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoriteRecipePage from "./pages/FavoriteRecipePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoriteRecipePage />} /> 
      </Routes>
    </div>
  );
}

export default App;