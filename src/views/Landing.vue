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
    <div class="flex space-x-4">
      <label
        v-for="option in options"
        @change="saveDistToStore"
        :key="option.value"
        class="inline-flex items-center cursor-pointer"
      >
        <input
          type="radio"
          name="distance"
          :value="option.value"
          v-model="main.distance"
          class="hidden"
        />
        <span
          :class="[
            'px-4 py-2 rounded-full transition-colors',
            main.distance === option.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          {{ option.label }}
        </span>
      </label>
    </div>
    <router-link :class="'btn btn-primary btn-lg' + (!(main.homeMarker.latitude == 0 && main.homeMarker.longitude == 0) ? '' : ' btn-disabled')" 
    to="/main">
      Get a Random Location</router-link
    >
  </div>
</template>

<script setup>
import PinMap from "@/components/PinMap.vue";
import { ref, onMounted } from "vue";

import { useMainStore } from '@/stores/main'
const main = useMainStore()

const options = [
  { label: "Short Walk", value: 0.5 },
  { label: "Long Walk", value: 2 },
  { label: "Hike", value: 7 },
];



</script>
