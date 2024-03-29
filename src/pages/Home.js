import React from "react";
import Navbar from "../components/js/Navbar";
import Float from "../components/js/Float";
import Hero from "../components/js/Hero";
import Skills from "../components/js/Skills";
import AboutMe from "../components/js/AboutMe";
import Projects from "../components/js/Projects";
import Contact from "../components/js/Contact";
import Footer from "../components/js/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Float />
            <Hero />
            <Skills />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
