<template>
  <div id="create-product">
    <form @submit.prevent="addProduct(create)">
      <div class="float">
        <fulfilling-bouncing-circle-spinner
          v-if="show"
          :animation-duration="4000"
          :size="30"
          color="#41b883"
        />
      </div>
      <InputGroup :formLayout="formLayout" :model="model">
        <ButtonGroup :attrs="buttonGroup" />
      </InputGroup>
    </form>
  </div>
</template>
<script>
import InputGroup from "@/elements/InputGroup";
import ButtonGroup from "@/elements/ButtonGroup";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import Create from "./Create.js";
import mixins from "@/mixins/index.js";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  mixins: [mixins],
  data() {
    return {
      formLayout: Create.formLayout,
      show: false,
      buttonGroup: [
        {
          type: "submit",
          class: "mr-3 btn-41b883",
          variant: "success",
          label: "Submit",
          disabled: false,
        },
        {
          class: "btn-41b883",
          variant: "success",
          label: "Cancel",
          to: "/",
          function: () => {
            this.cancel();
          },
        },
      ],
      model: {
        productName: null,
        price: null,
        status: false,
      },
      disabledBtn: null,
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT"]),
    addProduct: function(callback) {
      this.$v.$touch();

      var name = this.model.productName;
      var array = this.getAllProducts.items;

      if (!this.$v.$invalid) {
        this.animation();
        setTimeout(() => {
          if (!this.search(name, array, "productName")) {
            this.ADD_PRODUCT(this.newProduct);
            callback(name);
            this.$router.replace("/");
          } else {
            this.Exist(name);
            this.animation();
          }
        }, 1000);
      }
    },
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
    ...mapGetters(["getAllProducts"]),
    newProduct() {
      let newProduct = {
        id: this.getID,
        productName: this.model.productName,
        price: this.model.price,
        createdDate: this.getFormattedDate(),
        updatedDate: this.getFormattedDate(),
        status: this.model.status,
      };
      return newProduct;
    },
  },
  created() {
    this.disabledBtn = this.buttonGroup[0];
  },
  components: {
    InputGroup,
    ButtonGroup,
    FulfillingBouncingCircleSpinner,
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .float {
    position: absolute;
    width: 30px;
    right: 50px;
    top: 100px;
  }
}
</style>
