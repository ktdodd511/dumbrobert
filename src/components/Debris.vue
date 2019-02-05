<template>
  <v-container fluid>
  <img id="debris-image" class="center-block" :src="require('../assets/construction-debris.png')" />
    <v-layout row wrap>
    <v-flex class="service-headers">
      <h1>Debris Removal</h1>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex class="background-services">
        <img :src="require('../assets/atlanta.png')" />
        <div class="card" style="width: 50rem;">
          <h2>No room for a dumpster or not enough debris to justify a dumpster? JEL will send out a crew to remove your debris and leave your space broom clean.</h2>
          <v-btn class="btn btn-success">
          <router-link to="/contact" style="cursor: pointer" class="contact-btn">
            Contact Us to Learn More
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
