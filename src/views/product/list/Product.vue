<template>
  <div id="table">
    <Table
      :title="title"
      :linkTo="linkTo"
      :classes="classes"
      :items="getAllProducts.items"
      :fields="fields"
      :perPage="perPage"
      :pageOptions="pageOptions"
    >
      <template #cell(id)="data">
        <router-link :to="{ name: 'EditProduct', params: { id: data.value } }">
          <i
            class="fas fa-th-large ml-3"
            style="font-weight: bold; color: #42b983;"
          ></i>
        </router-link>
        <i
          class="fas fa-trash-alt ml-3"
          @click="Remove(data.value)"
          style="font-weight: bold; color: red;"
        ></i></template
    ></Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: {
        name: "Danh sách sản phẩm",
        button: "Tạo sản phẩm",
      },
      linkTo: "CreateProduct",
      classes: 'btn-41b883',
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
  methods: {
    ...mapActions(["REMOVE_PRODUCT"]),
    Remove(id) {
      var result = confirm("ARE YOU SURE ?")
      if (result){
        this.REMOVE_PRODUCT(id);
      }
    },
  },
  components: {
    Table,
  },
  computed: {
    ...mapGetters(["getAllProducts"]),
  },
};
</script>
