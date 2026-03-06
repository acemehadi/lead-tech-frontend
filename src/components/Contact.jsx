import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p>Get in touch with our team</p>
                </div>
                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Address</h4>
                                <p>House 10, Road 5, Block F<br />Banani, Dhaka - 1213<br />Bangladesh</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <div>
                                <h4>Phone</h4>
                                <p>+880 1234-567890<br />+880 9876-543210</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <p>info@leadtech.com<br />support@leadtech.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaClock />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Sunday - Thursday: 9:00 AM - 6:00 PM<br />Friday - Saturday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;