<template>
  <div class="sign">
    <div class="sign-header">
      <span class="icon">🔙</span>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="description">
        <h2>手机号密码登录</h2>
      </div>
      <div class="sign-box" style="margin-top:20px">
        <div class="selec">
          <select class="sele-controll" v-model="telarea">
            <option value>+86</option>
          </select>
        </div>
        <div class="inp">
          <input type="text" class="inp-controll" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input type="text" class="inp-controll" placeholder="请输入密码" />
        </div>
      </div>
      <div class="description">
        <p>
          登录即表明同意
          <a href>用户协议</a> 和
          <a href>隐私政策</a>
        </p>
      </div>
      <div class="code-btn">
        <button>登录</button>
      </div>

      <div class="other">
        <p>
          忘记了?
          <a href>找回密码</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telarea: "",
    };
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

.other {
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
}

.other a {
  font-size: 14px;
  color: #628db8;
}
</style>