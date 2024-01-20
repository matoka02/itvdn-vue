<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">
      <p>Loading contact information...</p>
    </div>
    <div v-else>
      <ul class="products-list">
        <template v-for="product in products" :key="product.id">
          <router-link :to="`/products/${product.id}`">
            <li>{{ product.title }}</li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'ProductList',
  components: {},
  setup() {
    const loading = ref(true);
    const products = ref({});

    onMounted(async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        products.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error(error);
        loading.value = false;
      }
    });

    return { loading, products }
  }
})
</script>
  
<style scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

.products-list li {
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  height: 100px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 5px;
}

.products-list li:hover {
  border: 1px solid #ffffff;
  background: #acafbe;
  color: #ffffff;
}

a:hover {
  text-decoration: none;
}</style>
  