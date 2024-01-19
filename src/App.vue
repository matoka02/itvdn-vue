<template>
  <!-- <input type="number" v-model="counter">
  <Counter :counter="counter" /> -->

  <div class="main-block">
    <button @click="showModal">Show modal window</button>
    <br><br><br>
    <label for="modalTitle">Title:</label>
    <input type="text" id="modalTitle" v-model="modalTitle">
    <br><br>
    <label for="modalMessage">Message:</label>
    <input type="text" id="modalMessage" v-model="modalMessage">
    <br><br>
    <Modal v-if="isModalOpen" :modal-title="modalTitle" :modal-message="modalMessage" @close="closeModal" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
} from "vue";
// import Counter from '@/components/Counter';
import Modal from '@/components/Modal';

export default defineComponent({
  name: 'App',
  // components: { Counter },
  // setup() {
  //   const counter = ref(0);
  //   return { counter };
  // },

  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const modalTitle = ref('');
    const modalMessage = ref('');

    function showModal() {
      isModalOpen.value = true;
      // modalTitle.value = 'Default title';
      // modalMessage.value = 'Default message';
    }
    function closeModal() {
      isModalOpen.value = false;
      modalTitle.value = '';
      modalMessage.value = '';
    }
    return { isModalOpen, modalTitle, modalMessage, showModal, closeModal };
  },

})
</script>

<style></style>
