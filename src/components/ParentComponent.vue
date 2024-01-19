<template>
  <div class="parent-container">
    <h2>Parent Component</h2>
    <ChildComponent>
      <!-- option API -->
      <!-- <template v-slot:content>Child Component Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        sequi ut animi blanditiis molestiae, quibusdam eius, pariatur nulla dolor reiciendis sit id mollitia aspernatur
        sed quos quaerat, temporibus cum itaque!</template>
      <template v-slot:title>Child Component Title</template> -->

      <!-- composition API -->
      <template v-slot:title>Child Component Title</template>
      <p>Child Component Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        sequi ut animi blanditiis molestiae, quibusdam eius, pariatur nulla dolor reiciendis sit id mollitia aspernatur
        sed quos quaerat, temporibus cum itaque!</p>

    </ChildComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ChildComponent from '@/components/ChildComponent.vue';

export default defineComponent({
  name: 'ParentComponent',
  components: { ChildComponent },
  setup(){
    return {};
  }
})
</script>

<style></style>
