
import Navbar from "./components/Header/Navbar1";
import Hero1 from "./components/Hero/Hero1";
import ContactForm from "./components/ContactForm/Contact1";
import Footer from "./components/Footer/Footer1";
import FeaturesSection from "./components/feature-section";
import Testimonials from "./components/Testimonials/Testimanioals1";

export default function Home() {
  return (
   
    <div>
      <Navbar/>
      <Hero1/>
      <FeaturesSection/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
