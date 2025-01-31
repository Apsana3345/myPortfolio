import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
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
