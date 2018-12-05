<template>
  <div>
    <gmap-map
      ref="mapRef"
      :center="location"
      :zoom="14"
      :options="{disableDefaultUI:true}"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        v-for="(event, index) in events"
        :key="'marker'+index"
        :position="event.position"
        :icon="require('../assets/event_marker.png')"
        @click="panTo(event.position)"
      ></gmap-marker>
      <gmap-circle
        v-for="(event, index) in events"
        :key="'circle'+index"
        :center="event.position"
        :options="{
            strokeColor: '#000',
            strokeOpacity: 0,
            strokeWeight: 0,
            fillColor: '#ff6ada',
            fillOpacity: 0.25,
            radius: 500
            }"
        @click="panTo(event.position)"
      ></gmap-circle>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      map: null,
      events: [
        {
          position: {
            lng: 34.77,
            lat: 32.09
          }
        },
        {
          position: {
            lng: 34.78,
            lat: 32.08
          }
        }
      ],
      location: {
        lng: 34.77,
        lat: 32.09
      }
    };
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      this.map = map;
    });
  },
  methods: {
    panTo(position) {
      if (!this.map) return;

      this.map.panTo(position);
    }
  }
};
</script>


<style scoped="true">
</style>
