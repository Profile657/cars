import "./assets/css/style.css";
import PostDetailPage from "./pages/PostDetailPage";
import Header from "./components/Header";
import CategoriesPage from "./pages/CategoriesPage";
import PostByCategoryPage from "./pages/PostByCategoryPage";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts" element={<PostByCategoryPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
