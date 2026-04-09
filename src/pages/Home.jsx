import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import Hero from "../components/sections/Hero";
import Events from "../components/sections/Events";
import Academy from "../components/sections/Academy";
import HireDJ from "../components/sections/HireDJ";
import DJs from "../components/sections/DJs";
function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <DJs />
      <Events />
      <Academy />
      <HireDJ />

      <Footer />
    </>
  );
}

export default Home;
