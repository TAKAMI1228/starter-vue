<template>
  <div style="padding: 0 20px 20px 0;">
    <v-list>
      <v-list-item
          v-for="item in items"
          :key="item.title"
      >
        <router-link to="/shinchoku">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const items = [
  {title: 'content1'},
  {title: 'content2'},
  {title: 'content3'},
]

</script>
