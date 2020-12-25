<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :editTo="editTo"
      :items="getAllUser.items"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
    />
  </div>
</template>
<script>
import Table from "@/Elements/Table";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "người dùng",
      linkTo: "Create",
      editTo: 'Edit',
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
        {
          label: "Thao tác",
          key: "id",
        },
      ],
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
      perPage: 20,
    };
  },
  components: {
    Table,
  },
  computed: {
    ...mapGetters(["getAllUser"]),
  },
};
</script>
