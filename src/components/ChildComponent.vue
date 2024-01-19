<template>
  <div class="child-container">
    <!-- option API -->
    <!-- <h2><slot name="title"></slot></h2>
    <div><slot name="content"></slot></div> -->

    <!-- composition API -->
    <h2><slot name="title"></slot></h2>
    <div><slot></slot></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ChildComponent',
  
  // composition API
  setup(){
    return{};
  }
})
</script>

<style></style>
