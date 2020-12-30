<template>
  <div id="create-product">
    {{ product }}
    <form action="" @submit.prevent="update">
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="fieldset-1"
            label="Tên sản phẩm"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              disabled
              placeholder="Nhập tên sản phẩm"
              v-model="product.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Giá sản phẩm"
            label-for="input-1"
          >
            <input
              class="form-control"
              id="userName"
              placeholder="Nhập giá sản phẩm"
              type="text"
              v-model="product.price"/></b-form-group
        ></b-col>
        <b-col cols="12">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="checkbox-1"
              v-model="product.status"
            />
            <label for="checkbox-1" class="form-checkbox-label"
              >Trạng thái</label
            >
          </div>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
            <b-button type="submit" block variant="success">Submit</b-button>
          </b-form-group>
          <b-form-group>
            <router-link :to="{ name: 'Product' }">
              <b-button block variant="success">Cancel</b-button></router-link
            >
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      product: {
        id: this.id,
        price: "",
        status: "",
      },
    };
  },
  mounted() {
    this.product = Object.assign(
      {},
      this.product,
      JSON.parse(JSON.stringify(this.currentProduct))
    );
  },
  methods: {
    ...mapActions(["LOAD_PRODUCT"]),
    update() {
      this.$store.dispatch("UPDATE_PRODUCT", this.product);
      this.$router.replace("/product");
    },
  },
  computed: {
    currentProduct() {
      this.LOAD_PRODUCT(this.id);
      return this.$store.state.product.currentProduct;
    },
  },
};
</script>
<style lang="scss">
form {
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
