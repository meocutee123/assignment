<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :items="getAllProducts.items"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
    >
      <template #cell(id)="data">
        <router-link :to="{ name: 'EditProduct', params: { id: data.value } }">
          <i class="fas fa-th-large ml-3" style="font-weight: bold; color: #42b983;"></i>
        </router-link> </template
    ></Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: {
        name: "Danh sách sản phẩm",
        button: "Tạo sản phẩm",
      },
      linkTo: "CreateProduct",
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "productName",
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
          label: "Trạng thái",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Hoạt động";
            }
            return "Không hoạt động";
          },
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
    ...mapGetters(['getAllProducts']),
  },
};
</script>
