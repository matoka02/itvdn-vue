<template>
  <div v-if="!loading">
    <Gallery :limit="perPage" :page="currentPage" />
    <Pagination :on-change-page="handleChangePage" :currentPage="currentPage" :page-count="pageCount" />
  </div>
  <Loader v-else />
</template>

<script>
import { defineComponent, onMounted, ref, computed } from 'vue';

import { fetchAllPhotos } from '@/api/fetchData';
import Loader from '@/components/Loader.vue';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';

export default defineComponent({
  name: 'App',
  components: { Loader, Gallery, Pagination },
  setup() {
    const currentPage = ref(1);
    const perPage = ref(15);
    const photosCount = ref(0);
    const loading = ref(true);

    const handleChangePage = (page) => {
      currentPage.value = page
    };

    const pageCount = computed(() => {
      return Math.ceil(photosCount.value / perPage.value)
    });

    onMounted(() => {
      fetchAllPhotos().then((data) => {
        photosCount.value = data.length;
        loading.value=false;
      }).catch((error) => {
        console.error(error);
        loading.value=false;
      })
    });
    return { currentPage, perPage, photosCount, loading, handleChangePage, pageCount }
  },
})
</script>

<style>
* {
  font-family: 'Lexend', sans-serif;
}
</style>
