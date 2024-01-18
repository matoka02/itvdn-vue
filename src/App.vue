<template>
  <!-- <h1 class="hello">Hello, {{ name }}</h1>

  <div class="container">
    <button @click="flag = !flag">Click me!</button>
    <h2 v-if="flag">Hello!</h2>
    <h2 v-else>Bye-bye</h2>
  </div>
  <div class="container-2">
    <button @click="count = count + 1">Click +1</button>
    <p>{{ count }}</p>
  </div>

  <div class="container-3">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div> -->
  <Cards/>
</template>

<script>
import { 
  defineComponent, 
  // ref, 
} from "vue";
import Cards from "@/components/Cards";

export default defineComponent({
  name: "App",
  // components: { },
  // setup() {
  //   const name = "Tessa";
  //   const flag = ref(true);
  //   const count = ref(0);
  //   const text = ref("");
  //   return { name, flag, count, text };
  // },

  components: { Cards },
  setup(){
    return {};
  }
});
</script>

<style>
/* .hello {
  text-align: center;
} */

ul {
  list-style: none;
}
</style>
