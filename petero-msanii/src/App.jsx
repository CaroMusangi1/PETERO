import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import BrandAmbassador from "./pages/BrandAmbassador";
import MasterOfCeremonies from "./pages/MasterofCeremonies";
import Collaborations from "./pages/Collaborations";
import RateCard from "./pages/RateCard";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/brand-ambassador" element={<BrandAmbassador />} />
          <Route path="/mc" element={<MasterOfCeremonies />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/rate-card" element={<RateCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;