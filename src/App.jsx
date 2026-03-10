import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Academy from "./sections/Academy";
import HireDJ from "./sections/HireDJ";
import DJs from "./sections/DJs";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Events />
      <Academy />
      <HireDJ />
      <DJs />

      <Footer />
    </>
  );
}

export default App;
