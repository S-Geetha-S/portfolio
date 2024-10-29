import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_7wq50fv', // Replace with your service ID
      'template_bzgncxj', // Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email, // Include the sender's email
        message: formData.message,
        to_name: 'Recipient Name', // You can hardcode this or set dynamically
      },
      'hJUblOoS8IqH4218S' // Replace with your public user ID
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent!');
    }, (error) => {
      console.log('Error sending email:', error.text);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className='contact' id='contact'>
      
      <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
