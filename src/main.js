import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './components/router.js' //追加

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
/*createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')*/
