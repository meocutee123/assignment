<template>
  <div id="create-user">
    <form action="" @submit.prevent="update">
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
              v-model="user.userName"
              disabled
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6"></b-col>
        <b-col cols="6"
          ><div class="form-group">
            <label for="first">Tên nhân viên</label>
            <b-form-input
              id="userName"
              placeholder="Tên nhân viên"
              v-model="user.name.first"
            ></b-form-input></div
        ></b-col>
        <b-col cols="6"
          ><div class="form-group">
            <label for="last">Họ nhân viên</label>
            <input
              type="text"
              class="form-control"
              ref="last"
              id="last"
              v-model="user.name.last"
            /></div
        ></b-col>
        <b-col cols="6">
          <b-form-checkbox v-model="user.status">
            Trạng thái
          </b-form-checkbox>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
            <b-button type="submit" block variant="success">Cập nhật</b-button>
          </b-form-group>
          <b-form-group>
            <router-link to="/"
              ><b-button block variant="success">Cancel</b-button></router-link
            >
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      user: {
        id: this.id,
        name: {
          first: "",
          last: "",
        },
        status: "",
      },
    };
  },
  mounted() {
    this.user = Object.assign(
      {},
      this.user,
      JSON.parse(JSON.stringify(this.currentUser))
    );
  },
  methods: {
    ...mapActions(["LOAD_USER"]),
    update() {
      this.$store.dispatch("UPDATE_USER", this.user);
      this.$router.replace("/");
    },
  },
  computed: {
    ...mapState(['currentUser']),
    currentUser() {
      this.LOAD_USER(this.id);
      return this.$store.state.user.currentUser 
    },
  },
};
</script>
<style lang="scss" scope>
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
