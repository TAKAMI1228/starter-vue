<template>
  <v-app>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(item, index) in gallery"
        :key="index"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const gallery = ref([
  { src: require('@/assets/images/chick_on_the_bed.jpg')},
  { src: require('@/assets/images/chicken_illast.png')},
  { src: require('@/assets/images/cute_chick_illast.png')},
  { src: require('@/assets/images/peacock_real.jpg')},
  { src: require('@/assets/images/rooster_in_the_farm.jpg')},
  { src: require('@/assets/images/dove_in_the_charch.jpg')},
  { src: require('@/assets/images/sleeping_chicks.jpg')},
])

</script>