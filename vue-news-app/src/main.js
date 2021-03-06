// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


const vuetifyOptions = { }
Vue.use(Vuetify)


Vue.config.productionTip = false


new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
  components: { App },
  template: '<App/>'
})


