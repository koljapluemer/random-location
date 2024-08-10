<template>
  <div class="flex space-x-4">
    <label
      v-for="option in options"
      :key="option.value"
      class="inline-flex items-center cursor-pointer"
    >
      <input
        type="radio"
        name="distance"
        :value="option.value"
        v-model="distance"
        class="hidden"
      />
      <span
        :class="[
          'px-4 py-2 rounded-full transition-colors',
          distance === option.value
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        {{ option.label }}
      </span>
    </label>
  </div>
  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";

import { homeMarker } from "../stores/mapStore";

let map: leaflet.Map;

import { ref } from "vue";

const distance = ref(0.5); // Default selected value

const options = [
  { label: "Short Walk", value: 0.5 },
  { label: "Long Walk", value: 2 },
  { label: "Hike", value: 7 },
];

onMounted(() => {
  if (homeMarker.value.latitude == 0 && homeMarker.value.longitude == 0) {
    // redirect to home page
    location.href = "/";
  }

  map = leaflet
    .map("map")
    .setView([homeMarker.value.latitude, homeMarker.value.longitude], 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  // map.addEventListener("click", (e) => {
  //   const { lat: latitude, lng: longitude } = e.latlng;

  //   leaflet
  //     .marker([latitude, longitude])
  //     .addTo(map)
  //     .bindPopup(
  //       `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
  //         2
  //       )}</strong>)`
  //     );

  //   //   if previous home marker, remove
  //   if (homeMarker.value) {
  //     console.log("removing home marker");
  //     map.removeLayer(homeMarker.value);
  //     // reload page
  //     location.reload();
  //   }

  //   homeMarker.value = { latitude, longitude };
  // });
});
</script>

<style scoped>
#map {
  width: 100%;
  height: max(80vh, 500px);
}
</style>
