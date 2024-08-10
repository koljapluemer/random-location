<template>
  <span> How about this location? </span>
  <GoalMap></GoalMap>

  <small>There is a new random location every day.</small>

</template>

<script setup>

import { ref, onMounted } from "vue";
import GoalMap from "@/components/GoalMap.vue";

</script>
