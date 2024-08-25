import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactStyles.module.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Show confirmation dialog before sending the email
    if (!window.confirm('Are you sure you want to send this email to Mohamed!?')) {
      return; // Stop execution if user cancels
    }

    emailjs.sendForm('service_ct5n8xt', 'template_bzjyhu9', form.current, {
      publicKey: 'I1pv9n4v8IOuPzq6i',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="formGroup">
        <label htmlFor="name" hidden>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email" hidden>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="message" hidden>Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <input className="hover btn" type="submit" value="Submit" />
    </form>
  );
};

export default Contact;
