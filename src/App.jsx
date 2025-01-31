import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Wrapper from "./components/layout/Wrapper";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <Layout>

      

        <Hero/>
     <Skills/>
    </Layout>
  );
};

export default App;
