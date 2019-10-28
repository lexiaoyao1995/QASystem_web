<template>
  <div>
    <div style="height: 500px;width: 500px;margin: 0 auto;margin-top: 100px">
      <Card :bordered="false">
        <div style="text-align: center;margin-bottom: 10px">
          <h2>Esc</h2>
        </div>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572265923927&di=ef1d377c53ec4410ae88c4d187afbf63&imgtype=0&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_080426%2F20080426_342a08233ed5df8d0f96Ec4bUYga8fme.jpg"
          alt="">
        <p>a Simple blog system</p>
        <div style="text-align: right">
          <p>design by guoguo & qiqi</p>
          <p>in 2019.10</p>
        </div>

      </Card>
    </div>
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
<style>
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
