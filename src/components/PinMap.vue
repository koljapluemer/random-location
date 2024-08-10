<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";
import { useGeolocation } from "@vueuse/core";

import { homeMarker } from "../stores/mapStore";

const { coords } = useGeolocation();

let map: leaflet.Map;

onMounted(() => {
  // default view is either homemarker or new york
  let defaultView = [40.73061, -73.935242];
  if (homeMarker.value) {
    defaultView = [homeMarker.value.latitude, homeMarker.value.longitude];
  }

  map = leaflet.map("map").setView(defaultView, 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  //   if homeMarker set, add to map
  if (homeMarker.value) {
    leaflet.marker([homeMarker.value.latitude, homeMarker.value.longitude]).addTo(map);
  }

  map.addEventListener("click", (e) => {
    const { lat: latitude, lng: longitude } = e.latlng;

    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2
        )}</strong>)`
      );

    //   if previous home marker, remove
    if (homeMarker.value) {
        console.log('removing home marker');
      map.removeLayer(homeMarker.value);
    }

    homeMarker.value = { latitude, longitude };
  });
});


</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
</style>
