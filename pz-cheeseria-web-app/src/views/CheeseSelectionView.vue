<template>
  <div class="container">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
    <div class="row">
      <div
        v-if="cheeseProducts.length > 0"
        class="col-lg-3 col-md-6 col-sm-12 mb-4"  
        v-for="cheese in cheeseProducts"
        :key="cheese._id"
      >
        <div class="card" style="width: 100%; height: 100%;">
          <img
            :src="getImageUrl(cheese.cheese_product_image_url)"
            alt="Cheese Image"
            class="card-img-top"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ cheese.cheese_product_name }}</h5>
            <p class="card-text">{{ cheese.cheese_product_description }}</p>
            <p class="card-text"><strong>Origin:</strong> {{ cheese.cheese_product_origin }}</p>
            <p class="card-text"><strong>Price per Kilo:</strong> ${{ cheese.cheese_product_price_per_kilo }}</p>
            <p class="card-text"><strong>Stock:</strong> {{ cheese.cheese_product_stock }}</p>
            <div class="mt-auto">
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</template>




<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cheeseProducts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('https://pz-cheeseria-rest-api-acd9gqcse0hwd6fx.australiacentral-01.azurewebsites.net/pz-cheeseria-rest-api/cheese_product/get_all_cheese_products');
    if (!response.ok) {
      throw new Error('Failed to fetch cheese products.');
    }
    const data = await response.json();
    cheeseProducts.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

// Function to dynamically resolve the image URL from the assets folder
const getImageUrl = (imageFileName: string) => {
  return new URL(`../assets/${imageFileName}`, import.meta.url).href;
};
</script>

<style scoped>

h1 {

}

.btn-primary {
  color: white;
  font-weight: 600;
  border: none;
  background-color: #e6be00;
}

.btn-primary:hover {
  background-color: #ffd500;
}

.container {
  width: 100vh;
  margin-top: 150px;
}

.card {
  border: none; /* Remove border for a cleaner look */
  border-radius: 0.5rem; /* Rounded corners for modern look */
  overflow: hidden; /* Hide overflow for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
  display: flex; /* Make card a flex container */
  flex-direction: column; /* Stack children vertically */
}

.card-img-top {
  height: 200px; /* Fixed height for uniformity */
  object-fit: cover; /* Ensure images cover the space without distortion */
}

.card-body {
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; /* Ensures space between elements */
  flex-grow: 1; /* Allow body to take up remaining space */
}

.btn-primary {
  width: 100%; /* Make button full width */
}

@media (max-width: 768px) {
  .card {
    width: 100%; /* Make cards full width on smaller screens */
  }
}
</style>
