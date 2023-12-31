import { createApp } from "vue/dist/vue.esm-bundler"
import App from "./App.vue"
import "./registerServiceWorker"
import store from "./store"

createApp(App).use(store).mount("#app")

import LuxCard from "./components/LuxCard.vue"
