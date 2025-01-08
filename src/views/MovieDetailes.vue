<template>
  <DefaultLayout>
    <div v-if="movie" class="flex items-center p-4 space-x-6 max-w-4xl mx-auto">
      <div class="flex-shrink-0 w-48 h-72 overflow-hidden rounded-lg shadow-lg">
        <img
          :src="movie.poster"
          alt="Movie Poster"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex-1">
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">
          {{ movie.name }}
        </h2>
        <p class="text-lg text-gray-700 mb-4">{{ movie.description }}</p>

        <div class="space-y-2 text-sm text-gray-500">
          <p><strong>Genre:</strong> {{ movie.genre || "N/A" }}</p>
          <p><strong>Release Year:</strong> {{ movie.year || "N/A" }}</p>
          <p><strong>Rating:</strong> {{ movie.rating || "N/A" }}</p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useDataStore } from "../store/DataStore";
import { computed, onMounted, ref } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const store = useDataStore();
const route = useRoute();

const movieId = route.params.id;
const movie = ref(null);

onMounted(() => {
  movie.value = store.findMovieById(movieId);
});
</script>
