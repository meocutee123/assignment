<template>
  <div id="create-user">
    <form action="">
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
              v-model="userDetail.userName"
              disabled
            ></b-form-input>
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
              v-model="userDetail.name.first"
            ></b-form-input> </b-form-group
        ></b-col>
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Họ nhân viên"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập họ"
              v-model="userDetail.name.last"
            ></b-form-input> </b-form-group
        ></b-col>
        <b-col cols="6">
          <b-form-checkbox v-model="userDetail.status">
            Trạng thái
          </b-form-checkbox>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
            <router-link to="/">
              <b-button block variant="success"
                >Cập nhật</b-button
              ></router-link
            >
          </b-form-group>
          <b-form-group>
            <router-link to="/"><b-button block variant="success">Cancel</b-button></router-link>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  props: ['id'],
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['EDIT_USER'])

  },
  computed: {
    ...mapState(['userDetail']),
  }
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
