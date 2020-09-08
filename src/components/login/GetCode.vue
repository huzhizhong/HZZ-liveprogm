<template>
  <div class="sign">
    <div class="sign-header">
      <span class="icon">🔙</span>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="description">
        <h2>请输入验证码</h2>
        <p>验证码已通过短信饭送至+86 13000000129</p>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            v-model="code"
            @input="chnageTel"
            type="text"
            class="inp-controll"
            placeholder="请输入验证码"
          />
        </div>
        <div class="selec">{{time}}</div>
      </div>
      <div class="code-btn">
        <button :disabled="disabled" :class="[btnbg?'active':'']" @click="sign" class="load-btn">
          <div v-if="loading" class="loads"></div>登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telarea: "",
      time: 60,
      disabled: true,
      btnbg: false,
      loading: false,
      codes: "",
      code: "",
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      this.timer();
      this.codes = "1234";
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      } else {
        console.log(123);
      }
    },
    sign() {
      this.loading = true;
    },
    chnageTel(e) {
      this.code = e.target.value;
      if (this.codes == this.code) {
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
  margin-top: 10px;
  justify-content: space-between;
}

.selec {
  padding-right: 20px;
  color: #ccc;
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

.load-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loads {
  width: 14px;
  height: 14px;
  border: 3px solid #fff;
  border-bottom: 3px #eee solid;
  border-radius: 50%;
  animation: load 1s infinite linear;
  margin-right: 5px;
}

@keyframes load {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>