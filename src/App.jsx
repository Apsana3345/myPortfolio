import React, { useEffect, useState } from "react";
import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Loader from "./components/smallComponent/loader/loader";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulates loading time
  }, []);


  return loading ? (
    <Loader/>
  ) :  (
    <Layout>
      <Hero />
      <Skills />
      <Education />
     <Project/>
     <Contact/>
    </Layout>
  );
};

export default App;
