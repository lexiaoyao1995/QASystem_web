<template>
  <div id="app">
    <Nav v-show="$route.name!=='Login'"></Nav>
    <router-view/>
  </div>
</template>

<script>
    import Nav from './components/Nav'

    export default {
        name: 'App',
        components: {
            Nav
        }
    }
</script>

<style>
</style>
