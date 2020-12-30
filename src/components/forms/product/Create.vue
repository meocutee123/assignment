<template>
  <div id="create-product">{{newProduct}}
    <form @submit.prevent="addProduct">
      <InputGroup :formLayout="formLayout" :model="model">
        <ButtonGroup :attrs="buttonGroup" />
      </InputGroup>
    </form>
  </div>
</template>
<script>
import InputGroup from "@/elements/InputGroup";
import ButtonGroup from "@/elements/ButtonGroup";
import { mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import Create from "./Create.js";
import mixins from "@/mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      formLayout: Create.formLayout,
      buttonGroup: Create.buttonGroup,
      model: {
        productName: null,
        price: null,
        status: false,
      },
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT"]),
    addProduct: function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.ADD_PRODUCT(this.newProduct);
        this.$router.push({ name: "Product" });
      }
    }
  },
  validations: {
    model: {
      productName: {
        required,
        minLength: minLength(3),
      },
      price: {
        required,
      },
    },
  },
  computed: {
    newProduct() {
      let newProduct = {
        id: this.getID,
        name: this.model.productName,
        price: this.model.price,
        createdDate: this.getFormattedDate(),
        updatedDate: this.getFormattedDate(),
        status: this.model.status,
      };
      return newProduct;
    },
  },
  components: {
    InputGroup,
    ButtonGroup,
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
