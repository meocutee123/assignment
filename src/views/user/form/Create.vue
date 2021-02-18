<template>
  <div id="create-user">
    <form @submit.prevent="addNew(create)">
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
import Create from "./Create.js";
import { mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
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
          variant: "success",
          label: "Cancel",
          class: "btn-41b883",
          to: "/user",
          function: () => {
            return this.cancel();
          },
        },
      ],
      model: {
        userName: null,
        first: null,
        last: null,
        status: false,
      },
      disabledBtn: null,
    };
  },
  validations: {
    model: {
      userName: {
        required,
        minLength: minLength(3),
      },
      first: {
        required,
      },
      last: {
        required,
      },
    },
  },
  methods: {
    async addNew() {
      this.$v.model.$touch();

      if (!this.$v.model.$anyError) {
        this.show = true;
        await this.$store.dispatch("ADD_USER", this.newUser);
        this.show = false;
        this.$router.replace("/user");
      }
    },
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
    newUser() {
      return {
        userName: this.model.userName,
        name: { first: this.model.first, last: this.model.last },
        createdDate: this.getFormattedDate(),
        status: this.model.status,
      };
    },
  },
  components: {
    InputGroup,
    ButtonGroup,
    FulfillingBouncingCircleSpinner,
  },
  created() {
    this.disabledBtn = this.buttonGroup[0];
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .float {
    position: absolute;
    width: 30px;
    right: 50px;
  }
}
</style>
