<template>
  <div style="margin-top: 5%; margin-left: 10%; margin-right: 10%">
    <Button @click="testFunc"></Button>
    <Row :gutter="16">
      <Col span="8">
        <Card style="width:350px">
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983198772&di=1c0b617dad8eeaee72e558a05d901c41&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Fcf%2F51%2F11%2Fcf51110bbd7d6444429379babac100e4.jpg"
              alt="">
          </div>
          <div style="text-align: center">
            <h3>yuntu</h3>
          </div>
          <div style="text-align: right">
            Created On : 123-123123-123
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card style="width:350px">
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983198772&di=1c0b617dad8eeaee72e558a05d901c41&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Fcf%2F51%2F11%2Fcf51110bbd7d6444429379babac100e4.jpg"
              alt="">
          </div>
          <div style="text-align: center">
            <h3>yuntu</h3>
          </div>
          <div style="text-align: right">
            Created On : 123-123123-123
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card style="width:350px">
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983198772&di=1c0b617dad8eeaee72e558a05d901c41&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Fcf%2F51%2F11%2Fcf51110bbd7d6444429379babac100e4.jpg"
              alt="">
          </div>
          <div style="text-align: center">
            <h3>yuntu</h3>
          </div>
          <div style="text-align: right">
            Created On : 123-123123-123
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card style="width:350px">
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983198772&di=1c0b617dad8eeaee72e558a05d901c41&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Fcf%2F51%2F11%2Fcf51110bbd7d6444429379babac100e4.jpg"
              alt="">
          </div>
          <div style="text-align: center">
            <h3>相册名字</h3>
          </div>
          <div style="text-align: right">
            Created On : 123-123123-123
          </div>
        </Card>
      </Col>
    </Row>
  </div>

</template>

<script>

    import photoService from "../service/photoService";

    export default {
        name: 'Album',
        mounted() {
        },
        methods: {
            testFunc() {
                console.log("test");
            }
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
