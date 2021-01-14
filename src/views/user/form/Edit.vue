<template>
  <div id="create-user">
    <form action="" @submit.prevent="update(edit)">
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
          to: "/User",
          function: () => {
            return this.cancel()
          }
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
  mounted() {
    const { name, ...rest } = JSON.parse(JSON.stringify(this.currentUser));
    let newCurrentUser = {
      ...rest,
      ...name,
    };
    this.model = Object.assign({}, this.model, newCurrentUser);
  },
  methods: {
    ...mapActions(["LOAD_USER"]),
    update(callback) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("UPDATE_USER", this.newUser);
        callback(this.model.userName)
        this.$router.replace("/user");
      }
    },
  },
  computed: {
    currentUser() {
      this.LOAD_USER(this.id);
      return this.$store.state.user.currentUser;
    },
    newUser() {
      let newUser = {
        id: this.id,
        name: { first: this.model.first, last: this.model.last },
        status: this.model.status,
      };
      return newUser;
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
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .btn {
    padding: 5px 40px;
  }
}
</style>
