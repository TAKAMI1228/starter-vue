<template>
  <div>
    test
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import {Howl} from 'howler';

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


const handleKeyDown = (e) => {
  switch (e.key) {
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
  document.addEventListener('keydown', handleKeyDown)
});

onUnmounted(() => {
  document.addEventListener('keydown', handleKeyDown);
})

</script>
