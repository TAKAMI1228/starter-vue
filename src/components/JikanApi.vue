<template>
  <div>
    <div v-if="anime">Anime Title: {{anime}}</div>
    <div v-if="name_kanji">Character Name: {{name_kanji}}</div>
    <img style="width:300px; height:300px;" v-if="image_url" :src="image_url" />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const anime = ref("")
const name_kanji = ref("")
const image_url = ref("")
async function fetchData() {
  const res = await axios.get('https://api.jikan.moe/v4/random/characters')
  let animeData = res.data;
  name_kanji.value = animeData.data.name_kanji;
  image_url.value = animeData.data["images"]["jpg"].image_url;
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
