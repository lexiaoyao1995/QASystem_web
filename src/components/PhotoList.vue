<template>
  <div class="holder">
    <Row :gutter="16">
      <Col span="8" v-for="item in photoList" v-bind:key="item.id">
        <Card bordered>
          <div style="text-align:center">
            <img :src="photoService.getPicById(item.id)" alt="">
            <h3>{{item.filename.split('.')[0]}}</h3>
            {{$tool.toDisplayDateString(item.uploadData)}}
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card bordered>
          <Upload
            ref="uploadPhoto"
            multiple
            type="drag"
            :on-success="uploadSuccess"
            :action="this.url">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>

    export default {
        name: 'photoList',
        data() {
            return {
                albumId: '',
                photoList: [],
                url: ''
            }
        },
        mounted() {
            this.albumId = this.$route.params.id;
            this.url = `${process.env.API_PREFIX}/photo/${this.albumId}`;
            this.loadList();
        },
        methods: {
            uploadSuccess() {
                this.$refs.uploadPhoto.clearFiles();
                this.loadList();
            },
            loadList() {
                this.photoService.getPhotoByAlbum(this.albumId, i => {
                    this.photoList = i.data.filter(i => i.isCover === false);
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

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
