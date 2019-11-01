<template>
  <div class="holder">
    <Row>
      <Col span="24" v-for="item in topicList" v-bind:key="item._id">
        <!--        踩坑：需要使用click.native-->
        <Card :bordered="true" style="margin-bottom: 30px" @click.native="clickCard(item._id,item.name)">
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
        methods: {
            clickCard(topicId, topicName) {
                // 踩坑：一定要加上name
                this.$router.push({
                    path: `/article`,
                    name: 'Article',
                    params: {
                        id: topicId,
                        name: topicName
                    }
                });
            }
        }
    }
</script>
<style scoped>
  .holder {
    width: 80%;
    margin-top: 30px;
    margin-left: 10%;
  }
</style>
