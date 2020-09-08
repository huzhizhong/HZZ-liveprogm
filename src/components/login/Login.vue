<template>
  <div class="sign">
    <div class="sign-header">
      <span class="icon">x</span>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="description">
        <h2>登录后抖音更懂你,内容更有趣,马上加入吧!</h2>
        <p>
          登录即表明同意
          <a href>用户协议</a> 和
          <a href>隐私政策</a>
        </p>
      </div>
      <div class="sign-box">
        <div class="selec">
          <select class="sele-controll" v-model="telarea">
            <option value>+86</option>
          </select>
        </div>
        <div class="inp">
          <input
            v-model="phone"
            @input="chnageTel"
            type="text"
            class="inp-controll"
            placeholder="请输入手机号"
          />
        </div>
      </div>

      <div class="not-sign">
        <p>未注册的手机号验证通过后将自动注册</p>
      </div>

      <div class="code-btn">
        <button :disabled="disabled" :class="[btnbg?'active':'']" @click="getCode">获取短信验证码</button>
      </div>

      <div class="other">
        <router-link tag="a" to="/paslogin">密码登录</router-link>
        <span @click="show">其他方式登录</span>
      </div>
    </div>
    <transition name="up">
      <div class="mask" v-if="showMask">
        <div class="oauth">
          <ul>
            <li class="ouath-item">今日头条登录</li>
            <li class="ouath-item">QQ登录</li>
            <li class="ouath-item">微信登录</li>
            <li class="ouath-item">微博登录</li>
            <li class="ouath-item last-item" @click="dismiss">取消</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telarea: "",
      showMask: false,
      disabled: true,
      btnbg: false,
      phone: "",
    };
  },
  methods: {
    show() {
      this.showMask = true;
    },
    dismiss() {
      this.showMask = false;
    },
    getCode() {
      this.$router.push("/getcode");
    },
    chnageTel(e) {
      this.phone = e.target.value;
      var regtel = /^1[345789]{1}\d{9}$/;
      if (regtel.test(this.phone)) {
        this.btnbg = true;
        this.disabled = false;
      } else {
        this.btnbg = false;
        this.disabled = true;
      }
    },
  },
};
</script>

<style scoped>
.sign {
  padding: 30px 15px;
}

.sign-header {
  display: flex;
  justify-content: space-between;
}

.sign-header .icon {
  font-size: 30px;
}

.sign-content {
  padding: 40px 20px;
}

.description h2 {
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
}

.description p {
  line-height: 40px;
  color: #666;
  font-size: 14px;
}

.description p a {
  color: #628db8;
  padding: 0 3px;
}

.sign-box {
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #f9f9f9;
}

.sele-controll {
  background-color: #f9f9f9;
  height: 36px;
  font-weight: bold;
  margin-left: 5px;
  border: none;
}

.inp-controll {
  height: 36px;
  background-color: #f9f9f9;
  border: none;
  width: 90%;
  margin-left: 10px;
}

input {
  caret-color: #fe2c55;
}

input::-webkit-input-placeholder {
  color: #ccc;
}

.not-sign {
  color: #ccc;
  font-size: 14px;
  margin-top: 10px;
}

.code-btn button {
  margin: 15px 0;
  width: 100%;
  padding: 10px 0;
  border: none;
  color: #fff;
}

.code-btn .active {
  background-color: #fe2c55;
  color: #fff;
}

.other {
  display: flex;
  justify-content: space-between;
}

.other a,
.other span {
  font-size: 14px;
  color: #628db8;
}

.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.oauth {
  width: 100%;
  height: 310px;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fff;
  text-align: center;
}

.ouath-item {
  border-bottom: 1px solid #f5f5f5;
  height: 60px;
  line-height: 60px;
}

.last-item {
  border-top: 10px #f9f9f9 solid;
}

/* 评论 */
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(100%);
}
</style>