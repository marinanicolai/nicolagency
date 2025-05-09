import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../components/styles/ContactPage.module.scss';
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import contactBanner from '../assets/images/chart.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, formData, publicKey)
  .then(() => {
    setStatusMessage('✅ Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });

    // Optionally clear the message after a few seconds
    setTimeout(() => setStatusMessage(''), 5000);
  })
  .catch((error) => {
    setStatusMessage('❌ Failed to send message. Please try again.');
    console.error("EmailJS Error:", error);

    setTimeout(() => setStatusMessage(''), 5000);
  });
};


  return (
    <>
      <WelcomeBannerLight
        title="Contact Us"
        subtitle="We'd love to hear from you. Please fill out the form below."
        background={contactBanner}
      />

      <section className={styles['contact-form-section']}>
        <div className={styles['form-wrapper']}>
        {statusMessage && (
          <p className={styles.statusMessage}>
            {statusMessage}
          </p>
        )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
