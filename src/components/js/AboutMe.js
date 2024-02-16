import "../css/AboutMe.css";
import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.jpg";

function AboutMe() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                            <img src={AboutImg} alt="mee" className="img-side__main-img" />
                            <span>
                                <img src={RoundedText} alt="text" />
                            </span>
                        </div>
                        <div className="text-side">
                            <h3>About me Test</h3>
                            <h4>
                                Software Developer  <br /> based in Hollywood, Florida 📍
                            </h4>
                            <p>
                                Hi, my name is Carlos, and I'm a Software Developer with a background in web design, client-server applications, and software development cycles with a focus on frontend.
                                <br />
                                <br />
                                As a previous Junior Software & Data Integration Engineer at BetterNOI, I developed innovative solutions based on product initiatives and business challenges utilizing both Python and JavaScript. I worked with new technologies daily to apply them on current projects and managed multiple data sources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
