/*global Vue*/

/* weex initialized here, please do not move this line */
// const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
// console.log(Vue.util.extend({el: '#root', router}, App))
let vm = new Vue({
    // el: '#root',
    // router,
    render: h => h(App)
}).$mount('#root');
// new Vue(Vue.util.extend({el: '#root', router}, App));
// router.push('/');

