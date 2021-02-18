<template>
  <div id="create-user">
    <form action="" @submit.prevent="update()">
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
import InputGroup from "@/elements/InputGroup.vue";
import ButtonGroup from "@/elements/ButtonGroup";
import mixins from "@/mixins/index.js";
import { formLayout } from "./Edit.js";
import { required } from "vuelidate/lib/validators";
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      formLayout: formLayout,
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
          to: "/User",
        },
      ],
      model: {},
    };
  },
  validations: {
    model: {
      userName: {
        required,
      },
      first: {
        required,
      },
      last: {
        required,
      },
    },
  },
  async mounted() {
    this.show = true
    await this.$store.dispatch("LOAD_USER", this.id);
    this.show = false
  },
  methods: {
    loadCurrentUser() {
      const { name, ...rest } = JSON.parse(JSON.stringify(this.currentUser));
      let newCurrentUser = {
        ...rest,
        ...name,
      };
      this.model = Object.assign({}, this.model, newCurrentUser);
    },
    async update() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
          this.show = true
          await this.$store.dispatch("UPDATE_USER", this.newUser);
          this.$router.replace("/user");
          this.show = false
      }
    },
  },
  computed: {
    newUser() {
      let newUser = {
        id: this.id,
        userName: this.model.userName,
        createdDate: this.model.createdDate,
        name: { first: this.model.first, last: this.model.last },
        status: this.model.status,
      };
      return newUser;
    },
    currentUser() {
      return this.$store.state.user.currentUser;
    },
  },
  watch: {
    currentUser: {
      handler() {
        this.loadCurrentUser();
      },
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
  .btn {
    padding: 5px 40px;
  }
  .float {
    position: absolute;
    width: 30px;
    right: 50px;
  }
}
</style>
