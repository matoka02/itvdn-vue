<template>
  <Header />
  <CustomLayout>
    <router-view />
  </CustomLayout>
</template>

<script>
import { defineComponent } from "vue";
import Header from '@/components/Header';
import CustomLayout from '@/components/CustomLayout';

export default defineComponent({
  name: 'App',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, CustomLayout },
  setup() {
    return {}
  }
})
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
