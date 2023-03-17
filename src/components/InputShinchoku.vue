<template>

  <v-sheet width="300" >
    <v-form @submit.prevent>
      <v-text-field
          v-model="firstName"
          :rules="rules"
          label="ユーザー名"
      ></v-text-field>
    </v-form>
  </v-sheet>

  <v-container width="500" >
    <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="内容"
        v-model="textAreaContent"
        model-value=""
    ></v-textarea>
  </v-container>

  <v-btn @click="onClickSubmit" type="submit" block class="mt-2">Submit</v-btn>

  <v-container width="500" >
    <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="出力"
        v-model="resultAreaContent"
        model-value=""
    ></v-textarea>
    <button @click="copy">Copy!</button>
  </v-container>

</template>


<script setup>
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()

const textAreaContent = ref("")
const resultAreaContent = ref("")
const firstName = ref("")

const onClickSubmit = () =>
{
  resultAreaContent.value =`ユーザー名[${firstName.value}]\n${textAreaContent.value}`;
}

const copy = async () => {
  try {
    await toClipboard(resultAreaContent.value)
    console.log('Copied to clipboard')
  } catch (e) {
    console.error(e)
  }
}


</script>
