<template>
  <div
    class="w-full p-6 bg-[#292D32] rounded-[5%] shadow-lg min-h-[350px] text-white relative group"
  >
    <img
      :src="props.movie.poster"
      alt="Movie Image"
      class="w-full h-[200px] object-cover rounded-lg mb-4"
    />

    <h2 class="text-2xl font-semibold truncate mb-2">{{ props.movie.name }}</h2>

    <p class="text-sm line-clamp-2 mb-4">
      {{ props.movie.description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <Badge
        :text="props.movie.rating"
        iconName="star"
        :score="movie.rating"
      ></Badge>
      <Badge
        :text="props.movie.genre"
        iconName="frame"
        backColor="#2C81FB"
      ></Badge>
      <Badge
        :text="props.movie.duration"
        iconName="clock"
        backColor="#702BFE"
      ></Badge>
    </div>

    <div
      class="absolute left-0 top-0 group-hover:left-[10px] group-hover:top-[10px] bg-[#702BFE] w-full h-full rounded-[5%] transition-all duration-300 z-[-1]"
    ></div>
  </div>
</template>

<script setup>
import Badge from "../components/UI/Badge.vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
