<template>
  <div class="about_page">
    <div class="text-content">
      <h1>About PZ Cheeseria</h1>
      <p>
        At PZ Cheeseria, our passion for fine cheese drives us to create a unique cheese shop that celebrates the art of cheese-making. As devoted cheese lovers, we have dedicated ourselves to sourcing only the finest and most exquisite cheeses from around the world. 
      </p>
      <p>
        Through our exceptional sourcing abilities, we are excited to introduce our initial selection of five artisan cheeses, each with its own unique flavor profile and story. 
      </p>
      <p>
        As part of our commitment to quality, we invite you to experience our curated cheese selection, available for purchase in-store. Join us in celebrating the joy of cheese at PZ Cheeseria, where every bite tells a story.
      </p>
    </div>
    <div class="image-content">
      <img
        src="../assets/vineyard.jpg" 
        alt="Selection of Cheeses"
      />
    </div>
  </div>
</template>

<style scoped>
.about_page {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 90vh;
}

.text-content {
  max-width: 50%;
  padding-right: 20px;
}

.image-content {
  flex: 1;
  height: 600px; /* Set a specific height for testing */
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.image-content img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 2.5rem;
  color: #4a4a4a;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .about_page {
    flex-direction: column;
    text-align: center;
  }

  .text-content {
    max-width: 100%;
    padding-right: 0;
  }

  .image-content {
    margin-top: 20px;
  }
}
</style>
