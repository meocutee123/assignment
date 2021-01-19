<template>
  <div id="create-product">
    <form action="" @submit.prevent="update(edit)">
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
import mixins from "@/mixins/index.js";
import Edit from "./Edit.js";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      formLayout: Edit.formLayout,
      show: false,
            disabledBtn: null,
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
        current: this.getFormattedDate(),
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
    this.model = Object.assign(
      {},
      this.model,
      JSON.parse(JSON.stringify(this.currentProduct))
    );
  },

  methods: {
    ...mapActions(["LOAD_PRODUCT"]),
    update(callback) {
      this.$v.$touch();

      var name = this.model.productName;
      this.animation();
      if (!this.$v.$invalid) {
        setTimeout(() => {
          this.$store.dispatch("UPDATE_PRODUCT", this.model);
          callback(name);
          this.$router.replace("/");
        }, 1000);
      } else {
        this.animation();
      }
    },
  },
      created(){
    this.disabledBtn = this.buttonGroup[0];
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
