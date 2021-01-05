<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :items="getAllUsers.items"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
    >
      <template #cell(id)="data">
        <router-link :to="{ name: 'Edit', params: { id: data.value } }">
          <i
            class="fas fa-edit ml-3"
            style="font-weight: bold; color: #42b983;"
          ></i>
        </router-link>
        <i
          class="fas fa-trash-alt ml-3"
          @click="Remove(data.value)"
          style="font-weight: bold; color: red;"
        ></i>
      </template>
    </Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: {
        name: "Danh sách người dùng",
        button: "Tạo người dùng",
      },
      linkTo: "Create",
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Tên đầy đủ",
          formatter: "fullName",
        },
        // A regular column
        {
          label: "Tên đăng nhập",
          key: "userName",
        },
        {
          label: "Ngày tạo",
          key: "createdDate",
        },
        {
          label: "Trạng thái",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Đang làm";
            }
            return "Nghỉ việc";
          },
        },
      ],
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
      perPage: 20,
    };
  },
  methods: {
    ...mapActions(["REMOVE_USER"]),
    Remove(id) {
      var result = confirm("ARE YOU SURE ?")
      if (result){
        this.REMOVE_USER(id);
      }
    },
  },
  components: {
    Table,
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
  },
};
</script>
