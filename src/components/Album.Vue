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
      <!--      <Col span="8">-->
      <!--        <Card style="width:350px">-->
      <!--          <div>-->
      <!--            <img-->
      <!--              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983198772&di=1c0b617dad8eeaee72e558a05d901c41&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2Fcf%2F51%2F11%2Fcf51110bbd7d6444429379babac100e4.jpg"-->
      <!--              alt="">-->
      <!--          </div>-->
      <!--          <div style="text-align: center">-->
      <!--            <h3>yuntu</h3>-->
      <!--          </div>-->
      <!--          <div style="text-align: right">-->
      <!--            Created On : 123-123123-123-->
      <!--          </div>-->
      <!--        </Card>-->
      <!--      </Col>-->
    </Row>
  </div>

</template>

<script>

    import photoService from "../service/photoService";

    export default {
        name: 'Album',
        data() {
            return {
                albumList: []
            }
        },
        mounted() {
            photoService.listAlbums(res => {

                console.log(res);
                let list = res.data.map(({album, cover}) => {
                    console.log(album)
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
                console.log(list);
                this.albumList = list;

                // let list = res.data.map(i => {
                //
                //     let item = {};
                //     item.name = i.name;
                //     item.desc = i.desc;
                //     item.id = i.id;
                //     item.timeStamp = i.timeStamp;
                //     item.time = i.time;
                //     console.log(i.id);
                //     photoService.getCover(i.id, res => console.log(res));
                //     return item;
                // });
                // console.log(list)
            })

        },
        methods: {}
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
