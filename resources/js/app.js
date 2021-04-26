/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
const files = require.context('../../Modules/', true, /\.vue$/i)

files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('default-layout', require('./layout/DefaultLayout.vue').default)

// const icons = require.context('vue-material-design-icons/', true, /\.vue$/i);

// icons.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], icons(key).default))


const app = new Vue({
    el: '#app',

});

// Inertia

// import { createApp, h } from 'vue';
// import { App, plugin } from '@inertiajs/inertia-vue3';
// import { InertiaProgress } from '@inertiajs/progress';

// const el = document.getElementById('root');

// createApp({
//     render: () => h(App, {
//         initialPage: JSON.parse(el.dataset.page),
//         resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
//     })
// })
//     .use(plugin).mount(el)

// InertiaProgress.init()
