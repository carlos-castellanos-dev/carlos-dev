import "../css/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Justin from "../images/testimonials/justin.jpg";
import Chris from "../images/testimonials/chris.jpg";
import Stav from "../images/testimonials/stav.jpg";
import Juan from "../images/testimonials/juan.jpg";
import Ash from "../images/testimonials/ash.jpg";
import Jeff from "../images/testimonials/jeff.jpg";
import Testimonial from "../js/TestimonialSlider";
import Slider from "react-slick";

const sliderData = [
    {
        id: 1,
        avatar: Stav,
        userName: "Stavros Aloizos",
        subtitle: "Chief Technology Officer at BetterNOI",
        link: "https://www.linkedin.com/in/stavros-aloizos-1474854/",
        review:
            '"Carlos, is a remarkable talent. His ability to grasp complex concepts and adapt to enterprise class building processes is exemplary. I had the pleasure of working closely with Carlos and find him to be an excellent listener and an excellent study. He has the ability to pick things up quickly and bring them to bear in his work product. I highly recommend Carlos and feel he would be a great addition and a truly valuable asset to any high performance development team."',
    },
    {
        id: 2,
        avatar: Justin,
        userName: "Justin Burke",
        subtitle: "Vice President of UI / UX Engineering at BetterNOI",
        link: "https://www.linkedin.com/in/justin-burke-6a9ba94/",
        review:
            '"Carlos came to work with us at BetterNOI as a Junior Developer but quickly proved to be an invaluable asset to the team. I was always comfortable giving him tasks, knowing he would get it done properly and with no hand holding. He is a quick learner, thoughtful in process and a great person in general. I cannot recommend him enough."',
    },
    {
        id: 3,
        avatar: Chris,
        userName: "Christos Aloizos",
        subtitle: "Software Engineer at BetterNOI",
        link: "https://www.linkedin.com/in/christos-aloizos-16956315b/",
        review:
            '"Carlos has unlimited potential. he is young, hard-working, quick to learn, hungry for the next assignment, and grasps complex software languages in a short amount of time without being shown what to do and how the system works. having him as a junior developer he has quickly made his mark at Betternoi and became a valuable asset to our team in the short amount of time he was with us. I see a bright future in the field of software engineering for Mr. Castellanos and wherever he ends up he will do great things."',
    },
    {
        id: 4,
        avatar: Ash,
        userName: "Ashutosh Gajankush",
        subtitle: "Senior Software & Data Integration Engineer at BetterNOI",
        link: "https://www.linkedin.com/in/ashutoshgajankush/",
        review:
            '"Carlos is a very professional and hard working individual. I worked with him when he was a junior developer at BetterNOI. Being new to the technology stack that we used, he with his curios nature learned our ways faster and got up to speed with little or no help. He is very capable of handling projects and tasks which will be his responsibility and he will get the job done soon and with precision. I would highly recommend him for a development position."',
    },
    {
        id: 5,
        avatar: Juan,
        userName: "Juan Camilo Llanos",
        subtitle: "Software & Mobile Environments Engineer at BetterNOI",
        link: "https://www.linkedin.com/in/juan-camilo-llanos-68a698135/",
        review:
            '"I worked next to carlos and saw him learn and improve very quick. Whatever task was given to him, he would get it done. He has a lot of potential. I have no doubt hes going to do great anywhere he goes!"',
    },
    {
        id: 6,
        avatar: Jeff,
        userName: "Jeff Wahl",
        subtitle: "Vice President of Data Integration at BetterNOI",
        link: "https://www.linkedin.com/in/jeff-wahl-03036b14/",
        review:
            '"Carlos is a knowledgeable and driven individual. One of the hardest parts of joining an established company with an extensive code base is learning its processes and becoming an asset. Carlos was able to jump in an gain a firm grasp rapidly. I admire his drive to learn and it was refreshing to work with him. Carlos utilized his time wisely and rarely was stationary on an issue without reaching out to other engineers for guidance. Carlos will be an asset where ever he goes and I hope to work with him again in the future."',
    },
];

function Testimonials() {
    const slidetSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="test-content">
                    <h3>Testimonials & Recommendations 💭</h3>
                    <Slider {...slidetSettings} className="testimonials-wrapper">
                        {sliderData.map((slider) => (
                            <Testimonial key={slider.id} slider={slider} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;