<template>
  <!-- <img src="@/assets/walk.svg" alt="" class="max-w-52 mx-auto" /> -->
  <h1 class="font-bold text-2xl">Get a random location near you for your next walk:</h1>
  <div class="flex gap-2 flex-col">
    <h2 class="text-bold text-xl">1) Set your home location</h2>
     <PinMap></PinMap>
    <small>You don't have to pin your exact location, your rough neighborhood will do. I (the site owner) do not save any of your location data.
      The site uses the privacy-friendly OpenStreetMap, and you can read <a href="https://osmfoundation.org/wiki/Privacy_Policy">their privacy policy</a>.
    </small>
    </div>

  <div class="flex gap-2 flex-col">
    <h2 class="text-bold text-xl">2)</h2>

    <router-link :class="'btn btn-primary btn-lg' + (!(homeMarker.latitude == 0 && homeMarker.longitude == 0) ? '' : ' btn-disabled')" 
    to="/main">
      Get a Random Location</router-link
    >
  </div>
</template>

<script setup>
import PinMap from "@/components/PinMap.vue";
import { homeMarker } from "../stores/mapStore";

</script>
