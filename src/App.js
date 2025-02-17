import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ChakraProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </ChakraProvider>
  );
};

export default App;
