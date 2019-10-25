<template>
  <div>
    首页
  </div>
</template>
<script>
    export default {
        name: 'Index',
        mounted() {
            this.$axios.get(process.env.API_PREFIX + '/user').then(res => console.log(res));
        }
    }
</script>
<style></style>
