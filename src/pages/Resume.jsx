import React from "react";
import Navbar from "../components/js/Navbar";
import Float from "../components/js/Float";
import Hero from "../components/js/ResumeHero";
import Experience from "../components/js/Experience";
import Testimonials from "../components/js/Testimonials";
import Skills from "../components/js/ResumeSkills";
import Footer from "../components/js/Footer";

function Resume() {
    return (
        <>
            <Navbar />
            <Float />
            <Hero />
            <Experience />
            <Testimonials />
            <Skills />
            <Footer />
        </>
    );
}

export default Resume;