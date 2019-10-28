<template>
  <div class="holder">
    <Row>
      <Col span="24" v-for="item in topicList" v-bind:key="item._id">
        <Card :bordered="true" style="margin-bottom: 30px">
          <p slot="title">{{item.name}}</p>
          <p>{{item.desc}}</p>
          <div style="text-align: right">
            发布时间 ： {{$tool.toDisplayDateString(item.createTime)}}
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>

    import topicService from "../service/topicService";

    export default {
        name: 'Articles',
        data() {
            return {
                topicList: []
            }
        },
        mounted() {
            topicService.listAll(res => {
                this.topicList = res.data;
            })
        },
        methods: {}
    }
</script>
<style scoped>
  .holder {
    width: 80%;
    margin-top: 30px;
    margin-left: 10%;
  }
</style>
