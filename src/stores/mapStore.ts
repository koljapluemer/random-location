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

export const generatedDestinationMarker = useLocalStorage<Marker>(
  "GENERATED_DESTINATION_MARKER",
  {
    latitude: 0,
    longitude: 0,
  }
);

export const destinationMarkerGeneratedAtDate = useLocalStorage(
  "DESTINATION_MARKER_GENERATED_AT_DATE",
  ""
);
