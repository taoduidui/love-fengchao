<template>
  <div class="main">
    <div class="leff">
      <ul>
        <li v-for="menu in categories" :key="menu.id">{{menu.name}}</li>
        <!-- <img src="../../assets/images/new.jpg" alt /> -->
      </ul>
    </div>
    <div class="rigg"></div>
  </div>
</template>
<script>
import heater from "../../components/comment/heather";
export default {
  data() {
    return {
      categories: []
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
<style lang="less">
.main {
  min-width: 320px;
  max-width: 720px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 1.08rem;
  bottom: 1.5rem;
  //   height: 100%;

  .leff {
    flex: 0 0 80px;
    width: 80px;

    background-color: #f8f8f8;
    overflow-y: scroll;
    ul {
      li {
        display: table;
        height: 1.08rem;
        width: 1.6rem;
        line-height: 54px;
        border-bottom: 1px solid #e0e0e0;
        text-align: center;
      }
    }
  }
  .rigg {
    flex: 1;
    background-color: #fff;
    position: relative;
    overflow-y: scroll;
  }
}
</style>
