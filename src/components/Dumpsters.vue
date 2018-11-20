<template>
  <v-container fluid>
  <img id="dumpster-image" :src="require('../assets/dumpsters.png')" />
    <v-flex class="service-headers">
      <h1>Dumpsters</h1>
    </v-flex>
    <v-flex class="background-services">
    <img :src="require('../assets/atlanta.png')" />
    <h2>From a single dumpster for a short term project to planning a national roll-out, we can help.</h2>
    <router-link to="/" tag="h2" style="cursor: pointer">Contact us for more information.</router-link>
    </v-flex>
  </v-container>
</template>

<script>
  export default {}
</script>
