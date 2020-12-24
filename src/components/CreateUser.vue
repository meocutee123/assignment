<template>
  <div id="create-user">
    <form @submit.prevent="addUser">
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="fieldset-1"
            label="Tên đăng nhập"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập tên"
              v-model.trim="$v.newUser.userName.$model"
              :class="{
                'is-invalid': $v.newUser.userName.$error,
                'is-valid': !$v.newUser.userName.$invalid,
              }"
            ></b-form-input>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newUser.userName.required"
            >
              Username cannot be blank!
            </p>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newUser.userName.minLength"
            >
              Username must greater than
              {{ $v.newUser.userName.$params.minLength.min }} characters!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Tên nhân viên"
            label-for="input-1"
          >
            <b-form-input
              placeholder="Nhập tên"
              v-model.trim="$v.newUser.name.first.$model"
              :class="{
                'is-invalid': $v.newUser.name.first.$error,
                'is-valid': !$v.newUser.name.first.$invalid,
              }"
            ></b-form-input>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newUser.name.first.required"
            >
              First name cannot be blank!
            </p>
          </b-form-group></b-col
        >
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Họ nhân viên"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập họ"
              v-model.trim="$v.newUser.name.last.$model"
              :class="{
                'is-invalid': $v.newUser.name.last.$error,
                'is-valid': !$v.newUser.name.last.$invalid,
              }"
            ></b-form-input>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newUser.name.last.required"
            >
              Last name cannot be blank!
            </p>
          </b-form-group></b-col
        >
        <b-col cols="6">
          <b-form-checkbox v-model="newUser.status">
            Trạng thái
          </b-form-checkbox>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
              <b-button type="submit" block variant="success"
                >Submit</b-button
            >
          </b-form-group>
          <b-form-group>
            <router-link to="/"
              ><b-button  block variant="success">Cancel</b-button></router-link
            >
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newUser: {
        id: this.$store.state.users.items.length + 1,
        name: { first: "", last: "" },
        userName: "",
        createdDate: this.getFormattedDate(),
        status: false,
      },
    };
  },

  methods: {
    ...mapMutations(["ADD_USER"]),
    addUser: function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.ADD_USER(this.newUser);
        this.$router.replace("/")
      }
    },
    getFormattedDate() {
      var date = new Date();
      var str =
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        `${+date.getHours() > 12 ? " PM" : " AM"}`;

      return str;
    },
  },
  validations: {
    newUser: {
      name: {
        first: {
          required,
        },
        last: {
          required,
        },
      },
      userName: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
