<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :editTo="editTo"
      :items="getAllProduct.items"
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
      title: "sản phẩm",
      linkTo: "CreateProduct",
      editTo: 'EditProduct',
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
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
      perPage: 20,
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
