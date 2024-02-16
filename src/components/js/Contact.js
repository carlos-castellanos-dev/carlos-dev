import "../css/Contact.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { IconMail, IconMapSearch, IconBrandLinkedin, IconSend, IconExclamationCircle } from "@tabler/icons-react";

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    // eslint-disable-next-line no-unused-vars
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });


    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_PUBLIC_KEY
            );

            // Display success alert
            toggleAlert('Your message was sent!', 'success');
        } catch (e) {
            console.error(e);
            // Display error alert
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form fields after submission
            reset();
        }
    };
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__title">
                            <p>Contact Me</p>
                            <h3>Reach out down below! 👇</h3>
                        </div>
                        <div className="contact__icons">
                            <div className="contact__icon-box">
                                <span>
                                    <IconMapSearch width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Location</h3>
                                    <p>Hollywood, Florida</p>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <span>
                                    <IconMail width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Mail</h3>
                                    <a href="mailto:castellanosc0520@gmail.com">
                                        castellanosc0520@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <span>
                                    <IconBrandLinkedin width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Linkedin</h3>
                                    <a href="https://www.linkedin.com/in/castellanosc/">
                                        in/castellanosc
                                    </a>
                                </div>
                            </div>
                        </div>
                        <section id="contactform" className='ContactForm'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        {alertInfo.display && (
                                            <Alert variant={`${alertInfo.type}`} onClick={() => setAlertInfo({ display: false, message: '', type: '' })} dismissible>
                                                <Alert.Heading>{alertInfo.message}</Alert.Heading>
                                            </Alert>
                                        )}
                                        <div className='contactForm'>
                                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                                {/* Row 1 of form */}
                                                <div className='row formRow'>
                                                    <div className='col-6'>
                                                        <input
                                                            type='text'
                                                            name='name'
                                                            {...register('name', {
                                                                required: { value: true, message: 'Please enter your name' },
                                                                maxLength: {
                                                                    value: 30,
                                                                    message: 'Please use 30 characters or less'
                                                                }
                                                            })}
                                                            className='form-control formInput'
                                                            placeholder='Name'
                                                        ></input>
                                                        {errors.name && <span className='errorMessage text-danger fs-4'><IconExclamationCircle width={20} height={20} /> {errors.name.message}</span>}
                                                    </div>
                                                    <div className='col-6'>
                                                        <input
                                                            type='email'
                                                            name='email'
                                                            {...register('email', {
                                                                required: true,
                                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                            })}
                                                            className='form-control formInput'
                                                            placeholder='Email'
                                                        ></input>
                                                        {errors.email && (
                                                            <span className='errorMessage text-danger fs-4'><IconExclamationCircle width={20} height={20} /> Please enter a valid email address</span>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Row 2 of form */}
                                                <div className='row formRow'>
                                                    <div className='col'>
                                                        <input
                                                            type='text'
                                                            name='subject'
                                                            {...register('subject', {
                                                                required: { value: true, message: 'Please enter a subject' },
                                                                maxLength: {
                                                                    value: 75,
                                                                    message: 'Subject cannot exceed 75 characters'
                                                                }
                                                            })}
                                                            className='form-control formInput'
                                                            placeholder='Subject'
                                                        ></input>
                                                        {errors.subject && (
                                                            <span className='errorMessage text-danger fs-4'><IconExclamationCircle width={20} height={20} /> {errors.subject.message}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Row 3 of form */}
                                                <div className='row formRow'>
                                                    <div className='col'>
                                                        <textarea
                                                            rows={3}
                                                            name='message'
                                                            {...register('message', {
                                                                required: true
                                                            })}
                                                            className='form-control formInput'
                                                            placeholder='Message'
                                                        ></textarea>
                                                        {errors.message && <span className='errorMessage text-danger fs-4'><IconExclamationCircle width={20} height={20} /> Please enter a message</span>}
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <Button variant="primary" className='submit-btn' size="lg" type='submit'>
                                                        Send Message
                                                        <span className="ms-3"><IconSend width={20} height={20} /></span>
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
