import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/CatalogPage";
import DJProfile from "./pages/DJProfilePage";
import ScrollToTop from "./components/utils/ScrollToTop";
import Auth from "./pages/auth/Auth";
import Onboarding from "./pages/Onboarding";
import AuthGate from "./components/auth/AuthGate";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dj/:slug" element={<DJProfile />} />
        <Route path="/auth" element={<Auth />} />

        {/* 🔒 PROTECTED ROUTE */}
        <Route
          path="/onboarding"
          element={
            <AuthGate requireProfile={false}>
              <Onboarding />
            </AuthGate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
