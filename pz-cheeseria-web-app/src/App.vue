<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LandingPageMessage from './components/LandingPageMessage.vue'
</script>

<template>
  <div class="header">
    <a href="/" class="logo">Pz Cheeseria</a>
    <div class="header-right">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about_page">About</RouterLink>
      <RouterLink to="/cheese_selection_page">Selection</RouterLink>
      <RouterLink to="/contact_page">Contact</RouterLink>
    </div>
  </div>

  <div class="main-content">
    <div class="slogan-section">
      <h1 class="slogan">
        Crafted with Passion, Curated with Care – <br />
        Discover the Finest Cheeses at Our Cheeseria.
      </h1>
      <p class="about-us">
        At Pz Cheeseria, we’re dedicated to sharing our love for fine cheese. We’ve carefully sourced five premium cheeses, now available for purchase in-store. Discover our curated selection and experience the true taste of quality.
      </p>
      <button class="cta-button">Select Now</button>
    </div>

    <div class="hero-image-section">
      <img class="hero-image" src="./assets/cheese-icon.png" alt="Cheese Icon">
    </div>
  </div>

  <RouterView />

  <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'>
</template>

<style scoped>
/* Style the header with your design */
.header {
  position: fixed; /* Fix the header at the top */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  font-family: 'Arial', sans-serif;
  z-index: 1000; /* Ensure it's above other elements */
}

/* Add padding to the top of the body so content is not hidden behind the header */
body {
  padding-top: 100px; /* Adjust this to the height of the header */
}

/* Style the logo */
.header .logo {
  font-size: 2rem;
  font-weight: bold;
  color: #FAD45E; /* Dark purple */
  font-family: 'Playfair Display';
  text-decoration: none;
}

/* Style the navigation links */
.header-right a {
  color: #7D7D7D;
  padding: 12px 20px;
  text-decoration: none;
  font-family: 'Pacifico';
  font-size: 1.2rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Hover state for navigation links */
.header-right a:hover {
  background-color: #FFD700; /* Golden hover background */
  color: #2F2352;
  border-radius: 5px;
}

/* Active link styling */
.header-right a.active {
  background-color: #FFD700;
  color: #2F2352;
  border-radius: 5px;
}

.main-content {
  display: flex; /* Flex container for slogan and hero image */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: calc(100vh - 100px); /* Full height minus header height */
}

.slogan-section {
  margin-right: 40px; /* Space between slogan and image */
  max-width: 70vh; /* Adjust as needed */
}

.hero-image-section {
  display: flex;
  align-items: center;
}

.hero-image-section .hero-image {
  max-width: 1000px; /* Set a maximum width for the image */
  max-height: 1000px; /* Set a maximum height for the image */
}

/* Slogan styles */
.slogan {
  font-family: 'Georgia', serif;
  font-size: 3rem;
  font-weight: 500;
  width: 75vh;
  color: #2F2352;
  margin-bottom: 1rem;
}

.about-us {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  color: #7D7D7D;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #FFD700;
  color: #2F2352;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e6be00;
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-right {
    margin-top: 10px;
  }

  .header-right a {
    display: block;
    padding: 10px 0;
  }

  .main-content {
    flex-direction: column; /* Stack the sections vertically */
    align-items: center; /* Center items */
  }

  .slogan-section {
    margin-right: 0; /* Remove right margin for mobile */
    max-width: 90%; /* Adjust for smaller screens */
    text-align: center; /* Center text on mobile */
  }

  .hero-image-section {
    margin-top: 20px; /* Add space above the hero image */
  }
}
</style>
