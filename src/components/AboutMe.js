import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.jpg";

function AboutMe() {
    return (
        <>
            <section className="about" id="about">
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
                            <h3>About me</h3>
                            <h4>
                                Software Developer  <br /> based in Hollywood, Florida 📍
                            </h4>
                            <p>
                                Hi, my name is Carlos, and I'm a Software Developer with a background in web design, client-server applications, and software development cycles with a focus on frontend.
                                <br />
                                <br />
                                Previously I was postioned as a Junior Software & Data Integration Engineer at BetterNOI utilizing Python, Django, Javascript, and SQL.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
