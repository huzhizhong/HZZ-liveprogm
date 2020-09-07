<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-zhibo"></span>
    </div>
    <div class="middle">
      <div class="item" @click="selectTopIndex(0)">
        <span :class="topIndex==0?'active':''">同城</span>
      </div>
      <div class="item" @click="selectTopIndex(1)">
        <span :class="topIndex==1?'active':''">关注</span>
      </div>
      <div class="item" @click="selectTopIndex(2)">
        <span :class="topIndex==2?'active':''">推荐</span>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      topIndex: 2,
    };
  },
  methods: {
    selectTopIndex: function (e) {
      this.topIndex = e;
    },
  },
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #cccccc;
  padding: 20px;
  box-sizing: border-box;
  /* background-color: #000; */
  z-index: 999;
}
.iconfont {
  font-size: 24px;
}

.left {
  width: 20%;
  text-align: left;
}
.right {
  width: 20%;
  text-align: right;
}

.middle {
  width: 60%;
  display: flex;
  justify-items: center;
}

/* 三个标签平均分 */
.middle .item {
  flex: 1;
  text-align: center;
}

.middle .item span {
  padding: 7px 0;
}

.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>