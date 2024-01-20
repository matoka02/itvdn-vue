<template>
  <form @submit.prevent="handleSubmit">
    <p>Create product</p>
    <div class="inputs-container">
      <div class="title-block">
        <label for="title">Title: </label>
        <input v-model="title" type="text" id="title">
      </div>
      <div class="price-block">
        <label for="price">Price: </label>
        <input v-model="price" type="number" id="price">
      </div>
      <button type="submit">Add product</button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'ProductForm',
  emits: ['product-added'],
  setup(_, { emit }) {
    const title = ref('');
    const price = ref('');

    const handleSubmit = () => {
      emit('product-added', { title: title.value, price: Number(price.value), id: '@' });
      title.value = '';
      price.value = '';
    };

    return { title, price, handleSubmit }
  },
})
</script>

<style scoped>
form {
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
}

.inputs-container {
  display: block;
  gap: 10px;
  padding-bottom: 15px;
}

.title-block,
.price-block {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: end;
  gap: 30px;
}
</style>