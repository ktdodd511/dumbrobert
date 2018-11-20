<template>
  <v-app>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
        {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer>
        <v-toolbar-items style="float: right" class="hidden-xs-only">
          <v-btn
            flat
            v-for="item in menuItems"
              :key="item.title"
              :to="item.path">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <div id="select-services">
            <v-icon left style="color: black; margin-right: 15px;">gavel</v-icon>
            <select onchange="location = this.value" v-model="services">
              <option style="font-weight: bold; color: black;" value="">SERVICES</option>
              <option :value="service.path"
              v-for="service in serviceOptions">
              {{ service.name }}</option>
            </select>
          </div>
        </v-toolbar-items>
      </v-spacer>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false,
        menuItems: [
          {title: 'Home', path: '/', icon: 'home'},
          {title: 'Contact', path: '/contact', icon: 'face'}
        ],
        services: '',
        serviceOptions: [
          {id: 1, name: 'Dumpsters', path: '/dumpsters'},
          {id: 1, name: 'Storage Containers', path: '/storage-containers'},
          {id: 1, name: 'Portable Toilets', path: '/portable-toilets'},
          {id: 1, name: 'Equipment Rental', path: '/equipment-rental'},
          {id: 1, name: 'Debris Removal', path: '/debris-removal'},
          {id: 1, name: 'Recycling Services', path: '/recycling-services'},
          {id: 1, name: 'Temporary Fencing', path: '/temporary-fencing'}
        ]
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      }
    }
  }
</script>
