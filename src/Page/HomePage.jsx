import DestinationSuggestions from "../components/DestinationSuggestions ";
import SpecialOffer from "../components/SpecialOffer";
import TestimonialCard from "../components/TestimonialCard";
import TravelSection from "../components/TravelSection";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

const HomePage = () => {
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
};

export default HomePage;
