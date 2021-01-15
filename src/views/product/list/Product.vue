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
          @click="Remove(data.value, onDelete)"
          style="font-weight: bold; color: red;"
        ></i></template
    ></Table>
  </div>
</template>
<script>
import Table from "@/elements/Table";
import { mapGetters, mapActions } from "vuex";
import mixins from "@/mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        name: "List products",
        button: "Create",
      },
      linkTo: "CreateProduct",
      classes: "btn-41b883",
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: "productName",
          label: "Name",
        },
        {
          label: "Created date",
          key: "createdDate",
        },
        {
          label: "Updated date",
          key: "updatedDate",
        },
        {
          label: "Price",
          key: "price",
        },
        {
          label: "Status",
          key: "status",
          formatter: (value, key, item) => {
            if (item.status) {
              return "Active";
            }
            return "Inactive";
          },
        },
      ],
      pageOptions: [20, 50, 100, { value: 1000, text: "Show all" }],
      perPage: 20,
    };
  },
  methods: {
    ...mapActions(["REMOVE_PRODUCT", "LOAD_PRODUCT"]),
    Remove(id, callback) {
      var result = confirm("ARE YOU SURE ?");
      this.LOAD_PRODUCT(id);
      var name = this.$store.state.product.currentProduct.productName;
      if (result) {
        this.REMOVE_PRODUCT(id);
        callback(name);
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
