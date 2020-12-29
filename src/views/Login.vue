<template>
  <div id="login">
    <form @submit.prevent="submit">
      <b-card
        :img-src="require('@/assets/logo.png')"
        img-alt="Image"
        img-top
        tag="article"
        class="login-form"
      >
        <b-form-group label="Tên đăng nhập">
          <b-form-input
            id="userName"
            placeholder="Nhập đăng nhập"
            v-model.trim="$v.userName.$model"
            :class="{
              'is-invalid': $v.userName.$error,
              'is-valid': !$v.userName.$invalid,
            }"
          ></b-form-input>
          <span
            class="invalid-feedback text-danger"
            v-if="!$v.userName.required"
          >
            Last name cannot be blank!
          </span>
        </b-form-group>
        <b-form-group label="Mật khẩu">
          <b-form-input
            placeholder="Nhập mật khẩu"
            v-model.trim="$v.password.$model"
            :class="{
              'is-invalid': $v.password.$error,
              'is-valid': !$v.password.$invalid,
            }"
          ></b-form-input>
          <span
            class="invalid-feedback text-danger"
            v-if="!$v.password.required"
          >
            Last name cannot be blank!
          </span>
        </b-form-group>
        <b-form-group>
          <b-button type="submit" block variant="success">Đăng nhập</b-button>
        </b-form-group>
      </b-card>
    </form>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.userName == "admin" && this.password == '123') {
          sessionStorage.setItem("auth", true);
          this.$router.replace("/");
        }else{
          console.log("Username or password is incorrect");
        }
      }
    },
  },
  computed: {},
  validations: {
    userName: {
      required,
    },
    password: {
      required,
    },
  },
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
  .login-form {
    padding: 20px;
    img {
      max-width: 250px;
      margin: 0 auto;
    }
  }
}
</style>
