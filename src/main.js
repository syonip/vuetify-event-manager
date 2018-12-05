import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABHtsig9fZgft0GylpF4Pt3BywI0R_J-c',
    libraries: 'places'
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
