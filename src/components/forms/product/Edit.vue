<template>
  <div id="create-product">
    <form action="" @submit.prevent="update">
      <InputGroup :formLayout="formLayout" :model="model">
        <ButtonGroup :attrs="buttonGroup" />
      </InputGroup>
    </form>
  </div>
</template>
<script>
import InputGroup from "@/elements/InputGroup";
import ButtonGroup from "@/elements/ButtonGroup";
import mixins from "@/mixins/index.js";
import Edit from "./Edit.js";
import { mapActions } from "vuex";
import { required} from "vuelidate/lib/validators";
export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      formLayout: Edit.formLayout,
      buttonGroup: Edit.buttonGroup,
      model: {
        productName: null,
        price: null,
        status: false,
      },
      product: {
        productName: '',
        price: "",
        status: "",
      },
    };
  },
    validations: {
    model: {
      productName: {
        required,
      },
      price: {
        required,
      },
    },
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("UPDATE_PRODUCT", this.product);
        this.$router.replace("/product");
      }
    },
  },
  computed: {
    currentProduct() {
      this.LOAD_PRODUCT(this.id);
      return this.$store.state.product.currentProduct;
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
