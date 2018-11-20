<template>
  <v-container fluid>
  <div id="main-image-div">
    <img id="main-image" :src="require('../assets/main-banner.png')" />
  </div>
      <v-layout row wrap class="services">
        <v-flex xs3>
          <router-link to="/dumpsters" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/dumpster.png')" />
          </router-link>
          <h3>Dumpsters</h3>
        </v-flex>
        <v-flex xs3>
          <router-link to="/storage-containers" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/storage.png')" />
          </router-link>
          <h3>Storage Containers</h3>
        </v-flex>
        <v-flex xs3>
          <router-link to="/portable-toilets" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/portable_toliet.png')" />
          </router-link>
          <h3>Portable toilets</h3>
        </v-flex>
        <v-flex xs3>
          <router-link to="/equipment-rental" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/construction-equipment.png')" />
          </router-link>
          <h3>Equipment Rental</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="services">
        <v-flex xs4>
          <router-link to="/debris-removal" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/debris.png')" />
          </router-link>
          <h3>Debris Removal</h3>
        </v-flex>
        <v-flex xs4>
          <router-link to="/recycling-services" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/recycling.png')" />
          </router-link>
          <h3>Recycling Services</h3>
        </v-flex>
        <v-flex xs4>
          <router-link to="/temporary-fencing" tag="span" style="cursor: pointer">
            <img class="service-img" :src="require('../assets/fencing.png')" />
          </router-link>
          <h3>Temporary Fencing</h3>
        </v-flex>
      </v-layout>


  </v-container>
</template>

<script>
export default {}
</script>
