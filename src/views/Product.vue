<template>
  <div>
    <div v-if="loading">
      <p>Loading contact information...</p>
    </div>
    <div v-else>
      <h1>{{ product?.title }}</h1>
      <p>{{ product?.description }}</p>
      <p>Price:{{ product?.price }}$</p>
      <p>Rate:{{ product?.rating.rate }}/18</p>
      <img class="product-image" :src="product?.image" :alt="`image-${id}`" srcset="">
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'Product',
  components: {},
  props: {
    id: { type: String, required: true },
  },
  setup(props) {
    const loading = ref(true);
    const product = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${props.id}`);
        product.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error(error);
        loading.value = false;
      }
    });

    return { loading, product }
  }
})
</script>
  
<style scoped>
.product-image {
  width: 400px;
}
</style>
  