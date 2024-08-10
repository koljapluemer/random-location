<template>
  <img src="@/assets/walk.svg" alt="" class="max-w-52 mx-auto" />
  <ul class="text-lg text-left list-disc mt-10">
    <li>You want to explore the area around you.</li>
    <li>You want to go on a walk, but not the same route you walked yesterday.</li>
  </ul>
  <div class="flex gap-2 flex-col">
    <router-link class="btn btn-primary btn-lg" to="/main">
      Get a Random Location</router-link>
    <span class="text-center mx-auto text-sm">...to walk to</span>
  </div>
</template>

<script setup></script>
