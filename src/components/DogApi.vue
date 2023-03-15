<template>
  <div>
    <img v-if="data" :src="data"/>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref(null)

async function fetchData() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  let temp = response.data
  data.value = temp.message
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
