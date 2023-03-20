<template>
  <div>
    <div v-if="anime">Anime Title: {{anime}}</div>
    <div v-if="character">Character Name: {{character}}</div>
    <div v-if="quote">Quote: {{quote}}</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const anime = ref("")
const character = ref("")
const quote = ref("")


async function fetchData() {
  const res = await axios.get('https://animechan.vercel.app/api/random')
  let animeData = res.data;
  anime.value = animeData.anime;
  character.value = animeData.character;
  quote.value = animeData.quote;


}

onMounted(fetchData)

</script>

<style scoped>

img {
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

</style>
