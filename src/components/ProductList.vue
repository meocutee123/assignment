<template>
  <div id="table">
    <Table :title="title" :linkTo="linkTo" :items="getAllProduct.items" :fields="fields" />
  </div>
</template>
<script>
import Table from "@/Elements/Table";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "sản phẩm",
      linkTo: "CreateProduct",
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "name",
          label: "Tên sản phẩm",
        },
        {
          label: "Ngày tạo",
          key: "createdDate",
        },
        {
          label: "Ngày cập nhật gần đây",
          key: "updatedDate",
        },
        {
          label: "Giá",
          key: "price",
        },
        {
          label: "product",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Hoạt động";
            }
            return "Không hoạt động";
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
    ...mapGetters(["getAllProduct"]),
  },
};
</script>
