import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider,} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import BlogDetails from "./components/Blogs/BlogDetails";
import ScrollToTop from "./components/ScrollToTop";
import FAQs from "./components/Faqs";
import HowWeWork from "./components/Home/HowWeWork";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy";
import Terms from "./components/Legal/Terms";


const App = () => {
  return (
    
    <ChakraProvider>
    <Router>
    <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/howwework" element={<HowWeWork/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer/>
    </Router>
    </ChakraProvider>
  );
};

export default App;
