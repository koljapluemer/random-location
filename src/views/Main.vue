<template>
  <span> How about this location? </span>
  <GoalMap></GoalMap>
  <div
    role="alert"
    class="alert alert-error cursor-pointer text-small"
    @click="disclaimerOpen = !disclaimerOpen"
    v-if="disclaimerOpen"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="text-small"
      >Disclaimer: This is a fairly dumb algorithm. It generates a random location with no regards to private property, crime rate, climate, bodies of water, traffic and so on. Be smart and be safe.</span
    >
  </div>
  <small>There is a new random location every day.</small>
  <router-link to="/" class="btn btn-sm">Change home location</router-link>

</template>

<script setup>

import { ref, onMounted } from "vue";
import GoalMap from "@/components/GoalMap.vue";

const disclaimerOpen = ref(true);
</script>
