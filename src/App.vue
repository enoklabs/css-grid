<style lang="scss">

    header {
        display: flex;
        align-items: center;
        color: white;
        .cssgrid {
            flex: 1;
            text-align: start;
            img {
                max-width: 160px;
                vertical-align: middle;
            }
        }
        nav {
            flex: 4;
            text-align: end;
        }
    }

</style>




<template>

    <div id="app">
        <main-nav></main-nav>
        <router-view></router-view>
    </div>

</template>




<script>

    import MainNav from './MainNav.vue'
    export default {
        name: 'app',
        components: {
            'main-nav': MainNav
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }

</script>
