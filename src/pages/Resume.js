import React from "react";
import Navbar from "../components/js/Navbar";
import Float from "../components/js/Float";
import Hero from "../components/js/Hero";
import Skills from "../components/js/Skills";
import Footer from "../components/js/Footer";



function Resume() {
    return (
        <>
            <Navbar />
            <Float />
            <Hero />
            <Skills />
            <Footer />
        </>
    );
}

export default Resume;