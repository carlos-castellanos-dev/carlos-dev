import Button from 'react-bootstrap/Button';
import { IconBrandLinkedin } from "@tabler/icons-react";

function TestimonialSlider({ slider }) {
    const { avatar, userName, subtitle, link, review } = slider;
    return (
        <div className="testimonial-item text-center mx-auto">
            <div className="thumb mb-3 mx-auto">
                <img src={avatar} alt="customer-name" />
            </div>
            <h4 className="mt-3 mb-0">{userName}</h4>
            <span className="subtitle">{subtitle}</span>
            <div className="test-text triangle-top position-relative mt-4">
                <p className="mb-0">{review}</p>
            </div>
            <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                href={link}
            >
                <Button variant="primary" className='test-icon mt-5'><IconBrandLinkedin className='me-2' size={30} />View Profile</Button>{' '}
            </a>
        </div>
    );
}

export default TestimonialSlider;