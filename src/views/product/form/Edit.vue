<template>
  <div id="create-product">
    <form action="" @submit.prevent="update(edit)">
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
export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      formLayout: Edit.formLayout,
      buttonGroup: [
        {
          type: "submit",
          class: "mr-3 btn-41b883",
          variant: "success",
          label: "Submit",
        },
        {
          class: "btn-41b883",
          variant: "success",
          label: "Cancel",
          to: "/",
          function: () => {
            this.cancel()
          }
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
      if (!this.$v.$invalid) {
        this.$store.dispatch("UPDATE_PRODUCT", this.model);
        callback(this.model.productName)
        this.$router.replace("/");
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
