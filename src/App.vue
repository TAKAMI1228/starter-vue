<template>
  <v-app>
    <v-main>
      <v-app-bar
        :elevation="2"
        color="teal-darken-4"
        dark>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" icon="mdi-menu"></v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(list, index) in menuList"
              :key="index"
              :value="index"
            >
              <router-link to="/home">
                <v-list-item-title>{{ list.title }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-app-bar-title>HatoChan!</v-app-bar-title>
        <template v-slot:append>
          <v-switch
            v-model="darkTheme"
            @update:model-value="changeTheme"
            :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
            hide-details
            inset
            class="mr-auto"
          />
        </template>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const darkTheme = ref(false)
const theme = useTheme()
const menuList = ref([
  { title: 'niwatori' },
  { title: 'hiyoko' },
  { title: 'hato' },
  { title: 'uguisu' },
])

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>
