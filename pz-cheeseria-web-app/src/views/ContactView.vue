<template>
    <div class="contact_page">
      <div class="contact-info">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! If you have any questions, comments, or feedback, please reach out to us through the form below or contact us using the details provided.
        </p>
        <div class="details">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> <a href="mailto:info@pzcheeseria.com">info@pzcheeseria.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p><strong>Address:</strong> 123 Cheese Lane, Cheesetown, CA 12345</p>
        </div>
      </div>
      <div class="contact-form">
        <h2>Contact Form</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
  
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
  
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" placeholder="Your Message" required></textarea>
  
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
        this.resetForm();
        alert('Thank you for contacting us! We will get back to you shortly.'); 
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact_page {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 100vh;
    max-width: 100%;
    gap: 20px; 
  }
  
  .contact-info {
    flex: 1;
  }
  
  .contact-info h1 {
    font-size: 2.5rem;
    color: #4a4a4a;
    margin-bottom: 20px;
  }
  
  .contact-info p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .details {
    margin-top: 20px;
  }
  
  .details h2 {
    font-size: 1.8rem;
    color: #4a4a4a;
    margin-bottom: 10px;
  }
  
  .details p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 5px;
  }
  
  .details a {
    color: #4a4a4a;
    text-decoration: none;
  }
  
  .details a:hover {
    text-decoration: underline; 
  }
  
  .contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .contact-form h2 {
    font-size: 1.8rem;
    color: #4a4a4a;
    margin-bottom: 20px;
  }
  
  .contact-form label {
    font-size: 1rem;
    color: #555;
    display: block;
    margin-bottom: 5px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem; 
  }
  
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #aaa; 
  }
  
  .contact-form button {
    padding: 12px 20px;
    background-color: #4a4a4a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem; 
    transition: background-color 0.3s ease; 
  }
  
  .contact-form button:hover {
    background-color: #333; 
  }
  
  @media (max-width: 1024px) {
    .contact_page {
      flex-direction: column;
      text-align: center;
      padding: 20px;
    }
  
    .contact-info {
      padding-right: 0;
      margin-bottom: 20px;
    }
  }
  </style>
  