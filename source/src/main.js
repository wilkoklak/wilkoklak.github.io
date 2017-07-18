// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMarkdown from 'vue-markdown'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
Vue.component('vue-markdown', VueMarkdown)

Vue.filter('timeStr', (dt) => {
	dt = new Date(dt)
	let year = dt.getFullYear()
	let month = dt.getMonth() + 1
	let day = dt.getDate()
	return `${year}-${month}-${day}`
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
