import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('https://formspree.io/f/mknarrjj', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
          setIsError(false);
        } else {
          setIsSubmitted(false);
          setIsError(true);
        }
      })
      .catch(error => {
        console.error(error);
        setIsSubmitted(false);
        setIsError(true);
      });
      
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='contact-background'>
    <Navbar />
    <div className="contact-page">
      <h2>Contact Us</h2>
      {isSubmitted && (
        <p className="success-message">Thank you for your message!</p>
      )}
      {isError && (
        <p className="error-message">Sorry, there was an error. Please try again later.</p>
      )}
      {!isSubmitted && !isError && (
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mknarrjj" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <button type="submit">Send</button>
        </form>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default ContactPage;

