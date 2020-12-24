<template>
  <div id="table">
    <Table :title="title" :linkTo="linkTo" :items="getAllUser.items" :fields="fields" />
  </div>
</template>
<script>
import Table from "@/Elements/Table";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      title: "người dùng",
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
        {
          label: "Thao tác",
          key: "id",
        },
      ],
    };
  },
  components: {
    Table,
  },
  computed: {
      ...mapGetters(['getAllUser'])
  },
};
</script>
