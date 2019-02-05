<template>
  <v-container fluid>
  <v-flex class="background-services">
    <img :src="require('../assets/atlanta.png')" />
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Contact</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <blockquote class="blockquote text-xs-center mt-5">
          <b> <p v-html="email"></p></b> or call <b>770-842-2489</b>
        </blockquote>
      </v-flex>
    </v-layout>
  </v-flex>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: 'Contact us at: bobby@gojel.com'
    }
  }
}
</script>
