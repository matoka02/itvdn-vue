<template>
  <!-- <div class="price-block">
    <p>Original price: {{ originalPrice }} &#8364;</p>
    <input type="number" v-model="discount">
    <p>Discount: {{ discount }} &#8364;</p>
    <p>Total price: {{ finalPrice }} &#8364;</p>
  </div> -->

  <div class="form-container">
    <h2>Message: {{ message }}</h2>
    <form @submit.prevent="submitForm()">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
      <br> <br>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">
      <br> <br>
      <button type="submit">Submit</button>
    </form>
    <ul v-if="submissions.length > 0">
      <li v-for="(submission, index) in submissions" :key="index">
        <p>Entered name: {{ submission.name }}</p>
        <p>Entered email: {{ submission.email }}</p>
        <button @click="deleteSubmission(index)">Delete</button>
      </li>
    </ul>
  </div>

</template>

<script>

// import { defineComponent, ref, computed } from "vue";

// export default defineComponent({
//   name: 'App',
//   components: {},
//   setup() {
//     const originalPrice = ref(100);
//     // const discount = ref(20);
//     const discount = ref(null);
//     console.log(originalPrice);       // RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 100, _value: 100}
//     const finalPrice = computed(() => {
//       return originalPrice.value - discount.value;
//     });
//     return { originalPrice, discount, finalPrice };
//   },
// }) 

export default {
  data() {
    return {
      name: '',
      email: '',
      submissions: [],
    }
  },
  methods: {
    submitForm() {
      const newSubmissions = {
        name: this.name,
        email: this.email,
      };
      this.submissions.push(newSubmissions);
      this.name = '';
      this.email = '';
    },
    deleteSubmission(index) {
      this.submissions.splice(index, 1)
    },
    showMessages() {
      alert('Hello world');
    }
  },
  computed: {
    message() {
      const count = this.submissions.length;
      if (count === 0) {
        return 'No submissions yet!';
      } else if (count === 1) {
        return '1 submission.';
      } else {
        return `${count} submissions`
      }
    }
  },
}

</script>

<style></style>
