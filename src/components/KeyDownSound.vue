<template>
  <div>
    <img :src='require("@/assets/images/notenecbwkai.png")'>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import {Howl, Howler} from 'howler';
Howler.volume(0.25);

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
      suumo1.stereo(-0.9);
      break;
    case "k":
      suumo2.play();
      break;
    case "o":
      suumo3.play();
      suumo3.stereo(0.9);

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

const handleKeyUp = (e) => {
  function stop() {
    switch (e.key) {
      case "j":
        suumo0.stop();
        break;
      case "i":
        suumo1.stop();
        break;
      case "k":
        suumo2.stop();
        break;
      case "o":
        suumo3.stop();
        break;
      case "l":
        suumo4.stop();
        break;
      case "p":
        suumo18.stop();
        break;

      case "a":
        suumo5.stop();
        break;
      case "w":
        suumo6.stop();
        break;
      case "s":
        suumo7.stop();
        break;
      case "e":
        suumo8.stop();
        break;
      case "d":
        suumo9.stop();
        break;
      case "r":
        suumo10.stop();
        break;
      case "f":
        suumo11.stop();
        break;
    }
  }
  setTimeout(stop, 66);
};

onMounted(() => {
  document.addEventListener('keypress', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
});

onUnmounted(() => {
  document.addEventListener('keypress', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
});

</script>
