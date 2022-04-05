import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Firebase config
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/init.js";

Vue.config.productionTip = false;
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
