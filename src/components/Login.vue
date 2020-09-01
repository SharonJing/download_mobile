<template>
  <div>
    <div class="header">用户登录</div>
    <div class="bgc">
      <div class="title">地质灾害培训平台</div>
    </div>
    <div class="content">
      <div class="login">
        <van-form label-width="3rem">
          <van-field v-model="loginForm.Name" name="姓名" label="姓名" :rules="loginFormRules.Name" />
          <van-field
            v-model="loginForm.Tel"
            type="tel"
            name="手机号"
            label="手机号"
            :rules="loginFormRules.Tel"
          />
          <!-- <div style="margin: 16px auto; width:80%; text-align:center"> -->
          <div @click="login" class="button">登录</div>
          <!-- </div> -->
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { loginReq } from "../api/user";
  export default {
    data() {
      return {
        // 这是登陆表单的验证对象
        loginForm: {
          Name: "",
          Tel: "",
        },
        // 这是表单的验证规则对象
        loginFormRules: {
          Name: [
            { required: true, message: "请输入姓名" },
            { min: 2, max: 10, message: "长度在 2 到 10个字符" },
          ],
          Tel: [
            { required: true, message: "请输入电话号码" },
            {
              min: 6,
              max: 15,
              message: "请输入正确的电话号码",
            },
          ],
        },
      };
    },
    methods: {
      login() {
        loginReq({ Name: this.loginForm.Name, Tel: this.loginForm.Tel }).then(
          (res) => {
            console.log(res);
            // if (res.data.success === false) {
            //   return this.$Message.error("姓名手机号不正确");
            // }
            // this.$Message.success("登录成功");
            if (res.data.success) {
              // localStorage.setItem("token", res.data.token);
              this.$router.push({ name: "home" });
              // localStorage.setItem("nickname", res.data.nickname);
            } else {
              this.$toast(res.data.errmsg);
            }
          }
        );
      },
    },
  };
</script>

<style lang="less" scoped>
  .header {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #333;
    font-family: PingFangSC-MediumPingFangSC-Medium, PingFang SC;
    padding: 10px 0;
  }
  .bgc {
    background: url(../assets/login.png) no-repeat;
    background-size: 100% 100%;
    height: 130px;
    .title {
      color: white;
      font-size: 20px;
      font-weight: 500;
      padding: 10px 0;
      text-align: center;
      padding-top: 40px;
    }
  }

  .content {
    .login {
      padding: 50px 30px;
      margin: -30px 15px 0;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      .button {
        width: 80%;
        height: 40px;
        background: rgba(78, 158, 255, 1);
        box-shadow: 0px 3px 10px 0px rgba(0, 126, 255, 0.2);
        border-radius: 22px;
        // margin-top: 50px;
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
        text-align: center;
        margin: 50px auto;
      }
    }
  }
</style>
