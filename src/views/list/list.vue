 <template>
  <!-- <heater></heater> -->
  <div id="big">
    <div id="left">
      <ul>
        <li v-for="menu in categories" :key="menu.id">{{menu.name}}</li>
        <img src="../../assets/images/new.jpg" alt />
      </ul>
    </div>
    <div class="rbox">ppp</div>
  </div>
</template>
<script>
import heater from "../../components/comment/heather";
export default {
  data() {
    return {
      categories: []
      //   products: []
    };
  },
  methods: {},
  async created() {
    let res = await this.$http.jsonp("http://localhost:3008/list");
    console.log(res);
    this.categories = res.data.categories;
  }
};
</script>
<style lang="less" scope>
#big {
  min-width: 320px;
  max-width: 720px;
  width: 100%;
  margin: 1.08rem 0 1.5rem 0;
  display: flex;
  overflow: hidden;
}
#left {
  flex: 0 0 80px;
  width: 80px;
  //   flex: 1;
  height: 100%;

  overflow-y: scroll;

  ul {
    // overflow-y: scroll;
    li {
      width: 1.6rem;
      height: 1.08rem;
      border-top: 1px solid #cccccc;
      border-left: 1px solid #ccc;
      text-align: center;
      line-height: 1.08rem;
      font-size: 0.28rem;
      color: #333;
      position: relative;
    }
    img {
      width: 0.8rem;
      height: 1.08rem;
      position: absolute;
      top: 1.04rem;
      left: 0.8rem;
    }
  }
}
.rbox {
  flex: 1;
  //   flex: 8;
  height: 3000px;
  background-color: #fff;
  overflow-y: scroll;
  position: relative;
}
</style>

