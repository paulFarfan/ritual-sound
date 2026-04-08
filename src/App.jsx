import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/CatalogPage";
import DJProfile from "./pages/DJProfilePage";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dj/:slug" element={<DJProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
