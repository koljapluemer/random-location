import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";


type Marker = {
  latitude: number;
  longitude: number;
};


export const homeMarker = useLocalStorage<Marker>("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

