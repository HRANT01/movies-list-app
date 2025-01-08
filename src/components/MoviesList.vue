<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
  >
    <div v-for="movie in movies" :key="movie.id">
      <router-link :to="{ name: 'Detailed', params: { id: movie.id } }">
        <MovieCard :movie="movie" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useDataStore } from "../store/DataStore";
import MovieCard from "./MovieCard.vue";

const store = useDataStore();
const movies = computed(() => store.movies);

onMounted(() => {
  store.fetchData();
});
</script>
