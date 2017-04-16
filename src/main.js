// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './components/Router/Router';
import store from './vuex/store';

// Import some global styles.
import './styles/style.scss';

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
