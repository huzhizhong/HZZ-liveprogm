<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <img src="../../assets/logo.png" />
        <span class="iconfont icon-dkw_xiaoxi"></span>
      </div>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-kongaixin"></span>
      <p>1w</p>
    </div>
    <div class="item-icon" @click.stop="showCom($event)">
      <span class="iconfont icon-dkw_xiaoxi"></span>
      <p>1.4w</p>
    </div>
    <div class="item-icon">
      <span class="iconfont icon-59fenxiang"></span>
      <p>1.8w</p>
    </div>
    <div class="rightbar-item">
      <div class="right-music">
        <img src="../../assets/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // VideoList.vue传过来的
  props: ["showComment"],
  data() {
    return {};
  },
  methods: {
    showCom(e) {
      e.preventDefault();
      this.$emit("changeCom", this.showComment);
    },
  },
};
</script>

<style>
/* .right-bar {
    width:80px;
    border:1px solid red;
  } */
.rightbar-item {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.avatar-border {
  height: 50px;
  width: 50px;
  border: 1px white solid;
  border-radius: 50%;
  position: relative;
  text-align: center;
}
.avatar-border img {
  height: 49px;
  width: 49px;
  border-radius: 50%;
}
.avatar-border .icon-dkw_xiaoxi {
  color: red;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
}
.item-icon {
  height: 60px;
  text-align: center;
  padding-top: 14px;
}
.item-icon .iconfont {
  color: #ffffff;
  font-size: 35px;
}
.item-icon p {
  color: #ffffff;
  font-size: 14px;
  padding-top: 5px;
}
.right-music {
  height: 54px;
  width: 54px;
  background: #2e2e2e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: round 6s 0s linear infinite;
}
.right-music img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>