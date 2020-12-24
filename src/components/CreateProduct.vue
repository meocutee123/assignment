<template>
  <div id="create-product">
    <form @submit.prevent="addProduct">
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="fieldset-1"
            label="Tên sản phẩm"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập tên sản phẩm"
              v-model.trim="$v.newProduct.name.$model"
              :class="{
                'is-invalid': $v.newProduct.name.$error,
                'is-valid': !$v.newProduct.name.$invalid,
              }"
            ></b-form-input>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newProduct.name.required"
            >
              Product name cannot be blank!
            </p>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newProduct.name.minLength"
            >
              Product name must greater than
              {{ $v.newProduct.name.$params.minLength.min }} characters!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="6"
          ><b-form-group
            id="fieldset-1"
            label="Giá sản phẩm"
            label-for="input-1"
          >
            <b-form-input
              id="userName"
              placeholder="Nhập giá sản phẩm"
              v-model.trim="$v.newProduct.price.$model"
              :class="{
                'is-invalid': $v.newProduct.price.$error,
                'is-valid': !$v.newProduct.price.$invalid,
              }"
            ></b-form-input>
            <p
              class="invalid-feedback text-danger"
              v-if="!$v.newProduct.price.required"
            >
              Price cannot be blank!
            </p></b-form-group
          ></b-col
        >

        <b-col cols="12">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            v-model="newProduct.status"
          >
            Trạng thái
          </b-form-checkbox>
        </b-col>
        <b-col cols="12" class="d-flex">
          <b-form-group class="mr-3 ml-auto">
            <b-button type="submit" block variant="success"
              >Submit</b-button
            >
          </b-form-group>
          <b-form-group>
            <router-link
              :to="{ name: 'Product'}"
            >
              <b-button block variant="success">Cancel</b-button></router-link
            >
          </b-form-group>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newProduct: {
        id: this.$store.state.products.items.length + 1,
        name: "",
        createdDate: this.getFormattedDate(),
        updatedDate: this.getFormattedDate(),
        price: "",
        status: false,
      },
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT", "FORMATED_DATE"]),
    addProduct: function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.ADD_PRODUCT(this.newProduct);
        this.$router.push({ name: "Product" });
      }
    },
    getFormattedDate() {
      var date = new Date();
      var str =
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        `${+date.getHours() > 12 ? " PM" : " AM"}`;

      return str;
    },
  },
  validations: {
    newProduct: {
      name: {
        required,
        minLength: minLength(3),
      },
      price: {
        required,
      },
    },
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
form {
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
