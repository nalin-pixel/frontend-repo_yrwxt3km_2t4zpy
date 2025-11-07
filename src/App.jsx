import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Places from "./components/Places";
import PlanYourVisit from "./components/PlanYourVisit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Highlights />
      <Places />
      <PlanYourVisit />
      <Footer />
    </div>
  );
}
