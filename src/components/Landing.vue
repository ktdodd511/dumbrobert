<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Local Service</h1>
      </v-flex>
    </v-layout>

      <v-layout column>
        <v-flex xs6 mt-5>
          <router-link to="/dumpsters" tag="span" style="cursor: pointer">
            <img :src="require('../assets/dumpster.png')" />
          </router-link>
        </v-flex>
        <v-flex xs6 mt-5>
          <router-link to="/storage-containers" tag="span" style="cursor: pointer">
            <img :src="require('../assets/storage.png')" />
          </router-link>
        </v-flex>
      </v-layout>

  </v-container>
</template>

<script>
export default {}
</script>
