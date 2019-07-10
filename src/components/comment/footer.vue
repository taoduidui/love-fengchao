<template >
  <div class="fother">
    <ul class="tapl">
      <li>
        <router-link to="/faster" class="her" active-class="now">首页</router-link>
      </li>
      <li>
        <router-link to="/list" class="faster" active-class="now">闪送超市</router-link>
      </li>
      <li>
        <router-link to="/cart" class="car" active-class="now">购物车</router-link>
      </li>
      <li>
        <router-link to="/mine" class="mine" active-class="now">我的</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scope>
.fother {
  min-width: 320px;
  max-width: 720px;
  width: 100%;
  position: fixed;
  /* left: 0; */
  bottom: 0;
  height: 1.5rem;
  /* background-color: hotpink; */
  z-index: 999;
  background-color: #f7f7f7;
  // opacity: 0.4;
}
.tapl {
  display: flex;
}
li {
  text-align: center;

  width: 25%;
  height: 1.1rem;
  // opacity: 1;
}
.her {
  display: block;
  width: 100%;
  height: 1.1rem;

  background: url("../../assets/images/menu-icon/navs-item-home.png") no-repeat
    center;
  background-size: 1rem 1rem;
  padding-top: 1rem;
  &.now {
    background: url("../../assets/images/menu-icon/navs-item-home-active.png")
      no-repeat center;
    background-size: 1rem 1rem;
  }
}
.faster {
  display: block;
  width: 100%;
  height: 1.1rem;

  background: url("../../assets/images/menu-icon/navs-item-menu.png") no-repeat
    center;
  background-size: 1rem 1rem;
  padding-top: 1rem;
  &.now {
    background: url("../../assets/images/menu-icon/navs-item-menu-active.png")
      no-repeat center;
    background-size: 1rem 1rem;
  }
}
.car {
  display: block;
  width: 100%;
  height: 1.1rem;

  background: url("../../assets/images/menu-icon/navs-item-cart.png") no-repeat
    center;
  background-size: 1rem 1rem;
  padding-top: 1rem;
  &.now {
    background: url("../../assets/images/menu-icon/navs-item-cart-active.png")
      no-repeat center;
    background-size: 1rem 1rem;
  }
}
.mine {
  display: block;
  width: 100%;
  height: 1.1rem;

  background: url("../../assets/images/menu-icon/navs-item-mine.png") no-repeat
    center;
  background-size: 1rem 1rem;
  padding-top: 1rem;
  &.now {
    background: url("../../assets/images/menu-icon/navs-item-mine-active.png")
      no-repeat center;
    background-size: 1rem 1rem;
  }
}
</style>
<script>
export default {};
</script>
