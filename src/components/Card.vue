<template>
  <ul class="card" v-for="card in arrayCard" :key="card.name">
    <li>
      <img :src="card.src" :alt="card.alt" style="width: 100px;">
      {{ card.name }} - {{ card.age }}
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Card',
  props: {
    arrayCard: Array
  },
  setup() {

    return {};
  }
})
</script>

<style scoped></style>
