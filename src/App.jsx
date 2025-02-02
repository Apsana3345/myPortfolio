import React, { useEffect, useState } from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Loader from "./components/smallComponent/loader/Loader";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <Hero />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </Layout>
  );
};

export default App;
