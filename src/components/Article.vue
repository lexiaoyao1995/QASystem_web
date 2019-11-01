<template>
  <div style="padding: 20px 20px">
    <Card>
      <p slot="title">
        {{topicName}}
      </p>
      <Collapse v-model="value1">
        <Panel v-for="item in articleList" v-bind:key="item._id">
          {{item.title}}<span style="margin-left: 20px;font-size: x-small">Created By {{item.author}}</span>
          <p slot="content">{{item.content}}</p>
        </Panel>
      </Collapse>
    </Card>


    <div style="position: fixed;bottom:30px;width: 80%;height: 200px;border: 1px solid beige">
      <Card>
        <p slot="title">新增文章</p>
        <Button type="primary" slot="extra" @click="insertArticle">submit</Button>
        <Input v-model="title" placeholder="输入标题" style="width: 300px"></Input>
        <Divider/>
        <Input v-model="content" placeholder="请输入内容" maxlength="500" show-word-limit type="textarea"></Input>
      </Card>
    </div>
  </div>
</template>

<script>
    import topicService from "../service/topicService";

    export default {
        name: 'Article',
        data() {
            return {
                topicId: '',
                topicName: '',
                value1: '1',
                articleList: [],
                title: '',
                content: ''
            }
        },
        mounted() {
            this.topicId = this.$route.params.id;
            this.topicName = this.$route.params.name;
            console.log("name " + this.$route.params.name);
            console.log(this.topicId);
            this.initArticle();
        },
        methods: {
            initArticle() {
                topicService.getArticlesByTopicId(this.topicId, res => {
                    this.articleList = res.data;
                })
            },
            insertArticle() {

                if (this.$tool.isNullOrUndefinedOrEmpty(this.title) || this.$tool.isNullOrUndefinedOrEmpty(this.content)) {
                    this.$Message.error("请输入标题和内容");
                } else {
                    let obj = {
                        'title': this.title,
                        'content': this.content,
                        'author': localStorage.getItem("userName")
                    };
                    topicService.insertArticle(this.topicId, obj, res => {
                        this.title = '';
                        this.content = '';
                        this.initArticle();
                    });
                }

            }
        }
    }
</script>


<style scoped>

</style>
