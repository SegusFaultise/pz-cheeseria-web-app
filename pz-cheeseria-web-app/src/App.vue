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

  <RouterView />

  <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'>
</template>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.822);
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  font-family: 'Arial', sans-serif;
  z-index: 1000; 
}

body {
  padding-top: 100px; 
}

.header .logo {
  background-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  color: #FAD45E; 
  font-family: 'Playfair Display';
  text-decoration: none;
}

.header-right a {
  color: #7D7D7D;
  background-color: transparent;
  padding: 12px 20px;
  text-decoration: none;
  font-family: 'Pacifico';
  font-size: 1.2rem;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.header-right a:hover {
  color: #FFD700; 
}

.header-right a.active {
  color: #FFD700;
}

@media screen and (max-width: 1024px) {
  .header {
    padding: 15px; 
  }

  .header-right a {
    font-size: 1rem; 
  }
}
</style>
