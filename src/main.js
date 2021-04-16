import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faEnvelopeSquare, faDesktop, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/styles/index.css';

library.add(faAngleDown, faEnvelopeSquare, faGithubSquare, faLinkedin, faDesktop, faDatabase);

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
