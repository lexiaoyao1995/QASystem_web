<template>
  <div style="margin-top: 5%; margin-left: 10%; margin-right: 10%">
    <Row :gutter="16">
      <Col span="8" v-for="(item,index) in albumList" v-bind:key="item.id">
        <Card style="width:350px" :to="`/photoList/${item.id}`">
          <img
            :src="photoService.getPicById(item.cover.id)"
            alt="">
          <div style="text-align: center">
            <h3>{{item.name}}</h3>
          </div>
          <div style="text-align: right">
            Created On : {{item.time}}
          </div>
        </Card>
      </Col>
      <Col span="12">
        <Card style="width:350px">
          <Upload
            ref="uploadFile"
            multiple
            type="drag"
            :before-upload="checkParas"
            :on-success="uploadSuccess"
            :data="this.dataUpload"
            :action="this.url">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
          <Input v-model="dataUpload.name" placeholder="相册名称" clearable
                 style="width: 200px;margin-bottom: 20px;margin-top: 20px"/>
          <Input v-model="dataUpload.desc" placeholder="相册描述" clearable style="width: 200px"/>
        </Card>
      </Col>
    </Row>
  </div>

</template>

<script>

    import photoService from "../service/photoService";

    export default {
        name: 'Album',
        data() {
            return {
                url: '',
                albumList: [],
                dataUpload: {
                    name: '',
                    desc: '',
                }
            }
        },
        mounted() {
            this.url = process.env.API_PREFIX + '/photo/album';
            this.loadList();
        },
        methods: {
            uploadSuccess() {
                this.loadList();
                //要调用组件的方法，需要在组件处添加引用 ref="uploadFile"
                this.$refs.uploadFile.clearFiles();
                this.dataUpload.name = '';
                this.dataUpload.desc = '';
            },
            loadList() {
                photoService.listAlbums(res => {
                    let list = res.data.map(({album, cover}) => {
                        let item = {};
                        item.cover = {};
                        item.name = album.name;
                        item.desc = album.desc;
                        item.id = album._id;
                        item.timeStamp = album.createTime;
                        item.time = this.$tool.toDisplayDateString(album.createTime).split(" ")[0];
                        item.cover.id = cover.id;
                        item.cover.name = cover.filename;
                        return item;
                    });
                    this.albumList = list;
                })
            },

            checkParas(file) {
                if (this.$tool.isNullOrUndefinedOrEmpty(this.dataUpload.name) || this.$tool.isNullOrUndefinedOrEmpty(this.dataUpload.desc)) {
                    this.$Message.error("请输入相册名称和描述");
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style scoped>

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
