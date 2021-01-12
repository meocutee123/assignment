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
        <span class="text-danger font-weight-bold">
          {{ warn }}
        </span>
        <b-form-group label="Username">
          <b-form-input
            id="userName"
            placeholder="Enter username"
            autocomplete="on"
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
        <b-form-group label="Password">
          <b-form-input
            placeholder="Enter password"
            v-model.trim="$v.password.$model"
            autocomplete="on"
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
          <b-button type="submit" block class="btn-41b883">Login</b-button>
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
      warn: "",
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.userName == "admin" && this.password == "123") {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: "Admin",
              role: "admin",
            })
          );
          this.$router.push(sessionStorage.getItem("redirectPath") || "/");
          sessionStorage.removeItem("redirectPath");
        } else if (this.userName == "user" && this.password == "123") {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: "User",
              role: "user",
            })
          );
          this.$router.push(sessionStorage.getItem("redirectPath") || "/");
          sessionStorage.removeItem("redirectPath");
        } else {
          this.warn = "User name or password is incorrect!";
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
<style lang="scss" scoped>
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
.btn-41b883{
  background-color: #41b883;
  border: none;
}
</style>
