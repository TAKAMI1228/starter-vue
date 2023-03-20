<template>
  <v-row>
    <v-col>
      <section class="nes-container">
        <section class="message-list">
          <section class="message -left">
            <i class="nes-mario"></i>
            <!-- Balloon -->
            <div class="nes-balloon from-left" style="background-color: transparent;">
              <p>Hello NES.css</p>
            </div>
          </section>

          <section class="message -right">
            <!-- Balloon -->
            <div class="nes-balloon from-right" style="background-color: transparent;">
              <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <i class="nes-kirby"></i>
          </section>
        </section>
      </section>
    </v-col>
    <v-col cols="3">

      <img src="" alt="犬の画像">

      <ArticleList />
    </v-col>
  </v-row>
  <v-btn @click="test">ぼたん</v-btn>
  <SoundPlayer number=1></SoundPlayer>
  <ApiTest></ApiTest>
  <PropsTest title="こんにちは" description="Propsてすとだよ。"></PropsTest>
  <DogApi></DogApi>
</template>


<script setup>
import ArticleList from './partials/ArticleList.vue'

const test = () => {
  console.log("押した")
}

import PropsTest from "@/components/PropsTest.vue";
import ApiTest from "@/components/ApiTest.vue";
import SoundPlayer from "@/components/SoundPlayer.vue";
import DogApi from "@/components/DogApi.vue";
</script>


