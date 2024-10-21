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

      <RouterLink to="/cheese_selection_page" class="cta-button">Select Now</RouterLink>
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
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: calc(100vh - 100px); 
  padding: 20px; 
  flex-wrap: wrap; 
  width: 100vh;
}

.slogan-section {
  margin-right: 20px; 
  max-width: 500px; 
  flex: 1; 
}

.hero-image-section {
  display: flex;
  align-items: center;
  flex: 1; 
}

.hero-image-section .hero-image {
  max-width: 100%; 
  height: auto; 
}

/* Slogan styles */
.slogan {
  font-family: 'Georgia', serif;
  font-size: 2.5rem; 
  font-weight: 500;
  color: #2F2352;
  margin-bottom: 1rem;
}

.about-us {
  font-family: 'Arial', sans-serif;
  font-size: 1rem; 
  color: #7D7D7D;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #ecc800;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem; 
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ffdd30;
}

@media screen and (max-width: 1024px) {
  .main-content {
    flex-direction: column; 
    align-items: center; 
    height: auto; 
  }

  .slogan-section {
    margin-right: 0; 
    max-width: 90%; 
    text-align: center; 
  }

  .hero-image-section {
    margin-top: 20px; 
    max-width: 90%; 
  }
}

@media screen and (max-width: 768px) {
  .slogan {
    font-size: 2rem; 
  }

  .about-us {
    font-size: 0.9rem; 
  }

  .cta-button {
    font-size: 0.9rem; 
    padding: 0.8rem 1.5rem; 
  }

  .hero-image-section .hero-image {
    max-width: 100%; 
    height: auto; 
  }
}
</style>