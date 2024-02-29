import React from "react";
import Navbar from "../components/js/Navbar";
import Float from "../components/js/Float";
import Hero from "../components/js/ResumeHero";
import Experience from "../components/js/Experience";
import Testimonials from "../components/js/Testimonials";
import Footer from "../components/js/Footer";

function Resume() {
    return (
        <>
            <Navbar />
            <Float />
            <Hero />
            <Experience />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Resume;