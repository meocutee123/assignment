<template>
  <div id="login">
    <form action="">
      <b-card
        :img-src="require('@/assets/logo.png')"
        img-alt="Image"
        img-top
        tag="article"
        class="login-form"
      >
        <b-form-group
          id="fieldset-1"
          label="Tên đăng nhập"
          label-for="input-1"
          valid-feedback="Thank you!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="userName"
            placeholder="Nhập đăng nhập"
            v-model="userName"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-1"
          label="Mật khẩu"
          label-for="input-1"
          valid-feedback="Thank you!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="password"
             placeholder="Nhập mật khẩu"
            v-model="password"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-button block variant="success">Đăng nhập</b-button>
        </b-form-group>

      </b-card>
    </form>
  </div>
</template>
<script>
export default {
    data() {
      return {
       
      }
    }
};
</script>
<style lang="scss" scope>
form {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .login-form{
    padding: 20px;
    img{
      max-width: 250px;
      margin: 0 auto;
    }
  }
}
</style>
