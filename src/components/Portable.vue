<template>
  <v-container fluid>
  <img id="dumpster-image" :src="require('../assets/portable_toliet.png')" />
    <v-layout row wrap>
    <v-flex class="service-headers">
      <h1>Portable Toilets</h1>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex class="background-services">
        <img :src="require('../assets/atlanta.png')" />
        <div class="card" style="width: 50rem;">
        <h2>From basic construction units to fully-functional comfort stations, we can help.</h2>
        <v-btn class="btn btn-success">
        <router-link to="/contact" style="cursor: pointer" class="contact-btn">
          Contact Us
        </router-link>
        </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {}
</script>
