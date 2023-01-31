import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import 'vue-material/dist/theme/default.css'
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";

// Vue.use(Toast, {
//   transition: "Vue-Toastification__bounce",
//   maxToasts: 5,
//   newestOnTop: true
// });

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#vuePodlet')
