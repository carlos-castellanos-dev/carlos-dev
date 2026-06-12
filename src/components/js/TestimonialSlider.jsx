import "../css/Testimonials.css";
import Button from 'react-bootstrap/Button';
import { IconBrandLinkedin } from "@tabler/icons-react";

function TestimonialSlider({ slider }) {
    const { avatar, userName, subtitle, link, review } = slider;
    
    return (
        <div className="testimonial-slide-container">
            <div className="testimonial-card">
                
                <div className="testimonial-quote-box">
                    <p className="testimonial-review">{review}</p>
                </div>
                
                <div className="testimonial-profile-footer">
                    <div className="thumb">
                        <img src={avatar} alt={`${userName} headshot`} />
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-name">{userName}</h4>
                        <span className="profile-subtitle">{subtitle}</span>
                    </div>
                    
                    <a
                        aria-label={`${userName} LinkedIn Profile`}
                        rel="noreferrer"
                        target="_blank"
                        href={link}
                        className="profile-link-btn"
                    >
                        <Button variant="primary" className="test-linkedin-btn">
                            <IconBrandLinkedin size={20} />
                            View Profile
                        </Button>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default TestimonialSlider;