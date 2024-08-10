<template>

  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";


let map: leaflet.Map;

import { ref } from "vue";

import randomLocation from "random-location";
import { useMainStore } from '@/stores/main'
const main = useMainStore()

const options = [
  { label: "Short Walk", value: 0.5 },
  { label: "Long Walk", value: 2 },
  { label: "Hike", value: 7 },
];



function getRandomCoord() {
  // TODO: this is a truly terrible non-DRY hack, with magic numbers
  // ...fix :)
  // ...this is also mirrored in store
  console.log('distance is:', distance.value)

  // if ((distance.value = 0.5)) {
  //   console.log(short_destinationMarkerGeneratedAtDate.value, new Date().toLocaleDateString())
  //   if (short_destinationMarkerGeneratedAtDate.value == new Date().toLocaleDateString()) {
  //     console.log(
  //       "short destinationMarkerGeneratedAtDate was today, not generating new destination"
  //     );
  //   } else {
  //     console.log(
  //       "destinationMarkerGeneratedAtDate was not today, generating new destination"
  //     );
  //     console.log('home marker', main.homeMarker.latitude, main.homeMarker.longitude)
  //     const randomPoint = randomLocation.randomCirclePoint(
  //       { latitude: main.homeMarker.latitude, longitude: main.homeMarker.longitude },
  //       distance.value * 1000
  //     );
  //     short_generatedDestinationMarker.value = randomPoint;
  //     short_destinationMarkerGeneratedAtDate.value = new Date().toLocaleDateString();
  //   }

  //   return short_generatedDestinationMarker.value;
  // }

}

onMounted(() => {
  if (main.homeMarker.latitude == 0 && main.homeMarker.longitude == 0) {
    // redirect to home page
    location.href = "/";
  }

  map = leaflet
    .map("map")
    .setView([main.homeMarker.latitude, main.homeMarker.longitude], 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  const markerCoords = getRandomCoord();
  // create marker
  leaflet
    .marker([
      markerCoords.latitude,
      markerCoords.longitude,
    ])
    .addTo(map)
    .bindPopup(
      `Destination Marker at (<strong>${markerCoords.latitude.toFixed(
        2
      )},${markerCoords.longitude.toFixed(2)}</strong>)`
    );
});
</script>

<style scoped>
#map {
  width: 100%;
  height: max(80vh, 500px);
}
</style>
