<template>
  <v-container fluid>
  <img id="recycling-image" class="center-block" :src="require('../assets/recycling-img.jpg')" />
    <v-layout row wrap>
    <v-flex class="service-headers">
      <h1>Recycling Services</h1>
    </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex class="background-services">
        <img :src="require('../assets/atlanta.png')" />
        <div class="card" style="width: 50rem;">
        <h2>Customized waste & recycling plans for your projects. JEL can design a compliant waste plan for LEED, Calgreen or other green building initiatives.</h2>
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
