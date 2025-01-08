<template>
  <div>
    <div
      class="flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full max-w-fit gap-1"
      :style="ratingStyles"
    >
      <div v-if="props.iconName">
        <Icon :name="props.iconName" class="text-white w-3 h-3"></Icon>
      </div>
      <p class="text-sm text-white">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
  score: {
    type: Number,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: false,
  },
  backColor: {
    type: String,
    required: false,
    default: "",
  },
});

const ratingStyles = computed(() => {
  if (props.backColor) {
    return { backgroundColor: props.backColor };
  }

  let color = "";
  if (props.score < 4) {
    color = "red";
  } else if (props.score >= 4 && props.score < 7) {
    color = "purple";
  } else if (props.score >= 7 && props.score <= 10) {
    color = "green";
  }

  return { backgroundColor: color };
});
</script>
