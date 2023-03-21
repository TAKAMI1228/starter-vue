<template>
  <v-row>
    <v-col>
      <NESBalloon></NESBalloon>
      <v-btn @click="test">ぼたん</v-btn>
      <SoundPlayer number=1></SoundPlayer>
    </v-col>
    <v-col cols="3">
      <JikanApi></JikanApi>
      <ArticleList />
    </v-col>
  </v-row>
</template>

<script setup>
import ArticleList from './partials/ArticleList.vue'

const test = () => {
  console.log("押した")
}

import SoundPlayer from "@/components/SoundPlayer.vue";
import JikanApi from "@/components/JikanApi.vue";
import NESBalloon from "@/components/partials/NESBalloon.vue";
</script>


