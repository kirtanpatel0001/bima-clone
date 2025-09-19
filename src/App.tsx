import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import TopBrands from "./sections/TopBrands";
import TechStack from "./sections/TechStack";
import Footer from "./components/Footer";
import Services from "./pages/services";
import CourseDetails from "./pages/courseDetails";
import Course1 from "./pages/course1";
import Course2 from "./pages/course2";
import Course3 from "./pages/course3";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import Blog1 from "./pages/blog1";
import Blog2 from "./pages/blog2";
import Blog3 from "./pages/blog3";
import Blog4 from "./pages/blog4";
import Blog5 from "./pages/blog5";
import CoursePricing from "./sections/CoursePricing";
import Testimonials from "./sections/Testimonials";
import CenterStickyQuestions from "./sections/CenterStickyQuestions";
import Workflow from "./sections/Workflow";
import Work from "./sections/Work";
import ContactPage from "./pages/contact";

function Home() {
  return (
    <>
      <Hero />
      {/* <Herounder /> */}
      <CenterStickyQuestions />
      <Work />
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
      <div className="font-sans overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog5" element={<Blog5 />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/services" element={<Services />} />
          <Route path="/course1" element={<Course1 />} />
          <Route path="/course2" element={<Course2 />} />
          <Route path="/course3" element={<Course3 />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
