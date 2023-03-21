<template>
  <div>
    <img :src='require("@/assets/images/notenecbwkai.png")'>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import {Howl} from 'howler';
const suumo0 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_0.mp3')],
});
const suumo1 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_1.mp3')],
});
const suumo2 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_2.mp3')],
});
const suumo3 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_3.mp3')],
});
const suumo4 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_4.mp3')],
});
const suumo5 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_5.mp3')],
});
const suumo6 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_6.mp3')],
});
const suumo7 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_7.mp3')],
});
const suumo8 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_8.mp3')],
});
const suumo9 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_9.mp3')],
});
const suumo10 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_10.mp3')],
});
const suumo11 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_11.mp3')],
});
const suumo18 = new Howl({
  src: [require('@/assets/audio/suumo/suumo_18.mp3')],
});

const handleKeyDown = (e) => {
  if (e.repeat) return; // 押しっぱなし防止
  switch (e.key) {
    case "j":
      suumo0.play();
      break;
    case "i":
      suumo1.play();
      break;
    case "k":
      suumo2.play();
      break;
    case "o":
      suumo3.play();
      break;
    case "l":
      suumo4.play();
      break;
    case "p":
      suumo18.play();
      break;

    case "a":
      suumo5.play();
      break;
    case "w":
      suumo6.play();
      break;
    case "s":
      suumo7.play();
      break;
    case "e":
      suumo8.play();
      break;
    case "d":
      suumo9.play();
      break;
    case "r":
      suumo10.play();
      break;
    case "f":
      suumo11.play();
      break;
  }
};

onMounted(() => {
  document.addEventListener('keypress', handleKeyDown)
});

onUnmounted(() => {
  document.addEventListener('keypress', handleKeyDown);
})

</script>
