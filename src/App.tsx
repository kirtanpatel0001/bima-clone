import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Workflow from "./sections/Workflow";
import TopBrands from "./sections/TopBrands";
import TechStack from "./sections/TechStack";
import Footer from "./components/Footer";
import Contact from './pages/contact';
import Services from './pages/services';
import CourseDetails from './pages/courseDetails';
import CoursePricing from "./sections/CoursePricing";
import Testimonials from "./sections/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Workflow />
  <TopBrands />  
  <TechStack />
  <Testimonials />
  <CoursePricing />
  <Team />
  <FAQ />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
