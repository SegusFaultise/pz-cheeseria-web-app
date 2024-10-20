<script setup lang="ts">

</script>

<template>
  <main>
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
      <img class="hero-image" src="../assets/cheese-icon.png" alt="Cheese Icon">
    </div>
  </div>
  </main>
  <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'>
</template>

<style scoped>
.main-content {
  display: flex; /* Flex container for slogan and hero image */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: calc(100vh - 100px); /* Full height minus header height */
  padding: 20px; /* Add padding for smaller devices */
  flex-wrap: wrap; /* Allow wrapping of flex items */
  width: 100vh;
}

.slogan-section {
  margin-right: 20px; /* Space between slogan and image */
  max-width: 500px; /* Adjust as needed */
  flex: 1; /* Allow flex growth */
}

.hero-image-section {
  display: flex;
  align-items: center;
  flex: 1; /* Allow flex growth */
}

.hero-image-section .hero-image {
  max-width: 100%; /* Set to 100% for responsiveness */
  height: auto; /* Maintain aspect ratio */
}

/* Slogan styles */
.slogan {
  font-family: 'Georgia', serif;
  font-size: 2.5rem; /* Adjusted for better scaling */
  font-weight: 500;
  color: #2F2352;
  margin-bottom: 1rem;
}

.about-us {
  font-family: 'Arial', sans-serif;
  font-size: 1rem; /* Adjusted for better scaling */
  color: #7D7D7D;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #FFD700;
  color: #2F2352;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem; /* Adjusted for better scaling */
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e6be00;
}

/* Responsive design */
@media screen and (max-width: 1024px) {
  .main-content {
    flex-direction: column; /* Stack sections vertically */
    align-items: center; /* Center items */
    height: auto; /* Remove fixed height */
  }

  .slogan-section {
    margin-right: 0; /* Remove right margin */
    max-width: 90%; /* Adjust for smaller screens */
    text-align: center; /* Center text */
  }

  .hero-image-section {
    margin-top: 20px; /* Add space above the hero image */
    max-width: 90%; /* Limit width for mobile */
  }
}

@media screen and (max-width: 768px) {
  .slogan {
    font-size: 2rem; /* Adjust slogan font size */
  }

  .about-us {
    font-size: 0.9rem; /* Adjust about text font size */
  }

  .cta-button {
    font-size: 0.9rem; /* Adjust button font size */
    padding: 0.8rem 1.5rem; /* Adjust padding */
  }

  /* Further adjustments for mobile */
  .hero-image-section .hero-image {
    max-width: 100%; /* Ensure full width on mobile */
    height: auto; /* Maintain aspect ratio */
  }
}
</style>