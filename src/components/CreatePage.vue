<template>
  <v-card
    class="mx-auto"
    max-width="800"
    variant="outlined"
    style="margin: 10px;"
  >
    <v-card-item>
      <div>
        <div style="padding:10px;">Article Create</div>
        <v-text-field label="Title" variant="outlined" v-model="title"></v-text-field>
        <v-textarea label="Content" variant="outlined" v-model="content"></v-textarea>
      </div>
    </v-card-item>
    <v-card-actions>
      <v-btn variant="outlined" @click="onClickCreate">
        Create!
      </v-btn>
    </v-card-actions>
  </v-card>
  <!--
  <div v-if="createOk.value">作成完了</div>
  -->
</template>
<script setup>
import { ref } from 'vue'

const title = ref('')
const content = ref('')
//const createOk = ref(false)

const onClickCreate = () => {
  //createOk.value = true
  console.log(title.value)
  console.log(content.value)
  //console.log(createOk.value)
}

</script>
