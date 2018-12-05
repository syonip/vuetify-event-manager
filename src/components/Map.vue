<template>
<div>
    <gmap-map
      :center="location"
      :zoom="14"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(event, index) in events"
        :position="event.position"
        @click="center=event.position"
      ></gmap-marker>
    </gmap-map>
    </div>
</template>

<script>

export default {
  name: "Map",
  data() {
    return {
      google: null,
      map: null,
      events: [],
      location: { lat: 37.77, lng: 122.4194 },
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(position => {
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
  },
};
</script>


<style scoped="true">

</style>
