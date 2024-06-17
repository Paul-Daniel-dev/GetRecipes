import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoriteRecipePage from "./pages/FavoriteRecipePage";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoriteRecipePage />} /> 
      </Routes>
    </div>
  );
}

export default App;