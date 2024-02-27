import React from "react";
import Navbar from "../components/js/Navbar";
import Float from "../components/js/Float";
import Hero from "../components/js/ResumeHero";
import Skills from "../components/js/Skills";
import Experience from "../components/js/Experience";
import Footer from "../components/js/Footer";

function Resume() {
    return (
        <>
            <Navbar />
            <Float />
            <Hero />
            <Skills />
            <Experience />
            <Footer />
        </>
    );
}

export default Resume;