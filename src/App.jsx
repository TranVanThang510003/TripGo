import DestinationSuggestions from "./components/DestinationSuggestions ";
import Header from "./Header";
import Navbar from "./Navbar";
import SpecialOffer from "./components/SpecialOffer";
import TravelSection from "./components/TravelSection";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <SpecialOffer />
      <TravelSection />
      <DestinationSuggestions />
      <TestimonialCard />
      <Footer />
    </div>
  );
}

export default App;
